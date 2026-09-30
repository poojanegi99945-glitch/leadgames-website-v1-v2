import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import type { IncomingMessage, ServerResponse } from 'node:http';
import path from 'path';
import {defineConfig} from 'vite';

dotenv.config();

type LeadGameSubmission = {
  source?: 'proposal' | 'qualification-modal' | 'hero-demo';
  name?: string;
  email?: string;
  phone?: string;
  companyName?: string;
  website?: string;
  industry?: string;
  goals?: string[];
  budgetRange?: string;
  wantsCall?: boolean;
  notes?: string;
  consentContact?: boolean;
  consentWhatsapp?: boolean;
  monthlyTraffic?: string;
  dealValue?: string;
  timeline?: string;
  leadScore?: number;
};

const INDUSTRY_OPTIONS: Record<string, string> = {
  Healthcare: 'HEALTHCARE_CLINICS',
  'Healthcare & Clinics': 'HEALTHCARE_CLINICS',
  'Healthcare / Clinic': 'HEALTHCARE_CLINICS',
  'Real Estate': 'REAL_ESTATE_BUILDERS',
  'Real Estate & Property': 'REAL_ESTATE_BUILDERS',
  'Real Estate / Property': 'REAL_ESTATE_BUILDERS',
  'SaaS & ERP': 'SAAS_ERP_SOFTWARE',
  'SaaS & ERP Software': 'SAAS_ERP_SOFTWARE',
  'SaaS & B2B Software': 'SAAS_ERP_SOFTWARE',
  Education: 'EDUCATION_EDTECH',
  'Education & EdTech': 'EDUCATION_EDTECH',
  Automotive: 'AUTOMOTIVE_MOBILITY',
  'Automotive & Mobility': 'AUTOMOTIVE_MOBILITY',
  'Automotive & Dealerships': 'AUTOMOTIVE_MOBILITY',
  'E-commerce': 'E_COMMERCE_BRANDS',
  'E-commerce & Brands': 'E_COMMERCE_BRANDS',
  'E-commerce & Retail': 'E_COMMERCE_BRANDS',
  Agency: 'MARKETING_AGENCY_CONSULTANT',
  'Agency & Consulting': 'MARKETING_AGENCY_CONSULTANT',
  'Marketing Agency / Consultant': 'MARKETING_AGENCY_CONSULTANT',
  'Marketing Agency / Growth': 'MARKETING_AGENCY_CONSULTANT',
  Other: 'OTHER_HIGH_TICKET_B2B_B2C',
  'Other High-Ticket Service': 'OTHER_HIGH_TICKET_B2B_B2C',
  'Other High-Ticket B2B / B2C': 'OTHER_HIGH_TICKET_B2B_B2C',
};

const GOAL_OPTIONS: Record<string, string> = {
  'Generate leads': 'GENERATE_LEADS',
  'Generate More Inbound Leads': 'GENERATE_LEADS',
  'Increase Inbound Lead Conversion': 'GENERATE_LEADS',
  'Increase Inbound Lead Conversion (+200% uplift)': 'GENERATE_LEADS',
  'Increase Sales Conversion Rate': 'GENERATE_LEADS',
  'Qualify leads': 'QUALIFY_LEADS',
  'Qualify Existing Leads': 'QUALIFY_LEADS',
  'Qualify Existing Leads Before Sales Calls': 'QUALIFY_LEADS',
  'Follow-up automation': 'FOLLOW_UP_AUTOMATION',
  'Automate WhatsApp / CRM': 'FOLLOW_UP_AUTOMATION',
  'Automate WhatsApp Follow-up & CRM Routing': 'FOLLOW_UP_AUTOMATION',
  'Promotion or contest': 'PROMOTION_OR_CONTEST',
  'Product recommendation': 'PRODUCT_RECOMMENDATION',
  'Not sure yet': 'NOT_SURE_YET',
  'Replace High-Bounce Static Forms': 'NOT_SURE_YET',
};

const BUDGET_OPTIONS: Record<string, string> = {
  'Under ₹50k': 'UNDER_50000_MONTH',
  '₹50k - ₹2L': 'OPT50000_TO_200000_MONTH',
  '₹2L - ₹10L': 'OPT200000_TO_1000000_MONTH',
  '₹10L+': 'ABOVE_1000000_MONTH',
};

function sendJson(response: ServerResponse, status: number, body: unknown) {
  response.statusCode = status;
  response.setHeader('Content-Type', 'application/json');
  response.setHeader('Cache-Control', 'no-store');
  response.end(JSON.stringify(body));
}

function readJson(request: IncomingMessage): Promise<LeadGameSubmission> {
  return new Promise((resolve, reject) => {
    let raw = '';
    request.on('data', (chunk) => {
      raw += chunk;
      if (raw.length > 100_000) {
        reject(new Error('Request body is too large.'));
        request.destroy();
      }
    });
    request.on('end', () => {
      try {
        resolve(JSON.parse(raw || '{}') as LeadGameSubmission);
      } catch {
        reject(new Error('Invalid JSON body.'));
      }
    });
    request.on('error', reject);
  });
}

function cleanText(value: unknown) {
  return typeof value === 'string' ? value.trim() : '';
}

function formatPhone(raw: string) {
  const trimmed = raw.trim();
  if (trimmed.startsWith('+91')) {
    return {
      primaryPhoneNumber: trimmed.slice(3).replace(/\D/g, ''),
      primaryPhoneCallingCode: '+91',
      primaryPhoneCountryCode: 'IN',
    };
  }
  if (trimmed.startsWith('+')) {
    return {
      primaryPhoneNumber: trimmed,
      primaryPhoneCallingCode: '',
      primaryPhoneCountryCode: '',
    };
  }
  return {
    primaryPhoneNumber: trimmed.replace(/\D/g, ''),
    primaryPhoneCallingCode: '+91',
    primaryPhoneCountryCode: 'IN',
  };
}

function formatLink(raw: string) {
  const url = raw.trim();
  return {
    primaryLinkUrl: url,
    primaryLinkLabel: url,
  };
}

function buildNotes(data: LeadGameSubmission) {
  const lines = [
    `Source: ${data.source || 'proposal'}`,
    data.notes ? `Notes: ${data.notes}` : '',
    data.monthlyTraffic ? `Monthly traffic: ${data.monthlyTraffic}` : '',
    data.dealValue ? `Deal value: ${data.dealValue}` : '',
    data.timeline ? `Timeline: ${data.timeline}` : '',
    typeof data.leadScore === 'number' ? `Lead score: ${data.leadScore}/100` : '',
    `Submitted at: ${new Date().toISOString()}`,
  ].filter(Boolean);

  return lines.join('\n');
}

async function createLeadGameRecord(data: LeadGameSubmission) {
  const baseUrl = (process.env.TWENTY_BASE_URL || 'http://localhost:4000').replace(/\/$/, '');
  const apiKey = process.env.TWENTY_API_KEY;

  if (!apiKey) {
    throw new Error('TWENTY_API_KEY is not configured on the server.');
  }

  const name = cleanText(data.name);
  const email = cleanText(data.email);
  const phone = cleanText(data.phone);
  const industry = cleanText(data.industry);
  const companyName = cleanText(data.companyName);
  const website = cleanText(data.website);
  const notes = buildNotes(data);

  if (!name || !email || !phone) {
    throw new Error('Name, email and phone are required.');
  }

  const goals = Array.isArray(data.goals)
    ? Array.from(new Set(data.goals.map((goal) => GOAL_OPTIONS[goal]).filter(Boolean)))
    : [];

  const body: Record<string, unknown> = {
    name,
    email: { primaryEmail: email },
    phoneWhatsapp: formatPhone(phone),
    companyPracticeBrandName: companyName || undefined,
    industryVertical: INDUSTRY_OPTIONS[industry] || undefined,
    goals: goals.length ? goals : undefined,
    monthlyAdvertisingBudget: data.budgetRange ? BUDGET_OPTIONS[data.budgetRange] : undefined,
    specificRequirementsCampaignNotes: notes,
    strategyCallRequested: Boolean(data.wantsCall),
    contactConsent: data.consentContact !== false,
    whatsappUpdates: Boolean(data.consentWhatsapp),
    websiteCurrentLandingPage: website ? formatLink(website) : undefined,
  };

  for (const key of Object.keys(body)) {
    if (body[key] === undefined) delete body[key];
  }

  const response = await fetch(`${baseUrl}/rest/leadGameFormDetailss`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  });

  const result = await response.json().catch(async () => ({ raw: await response.text() }));

  if (!response.ok) {
    throw new Error(
      `Twenty CRM rejected the submission (${response.status}): ${JSON.stringify(result).slice(0, 500)}`,
    );
  }

  return result;
}

export default defineConfig(() => {
  return {
    plugins: [
      react(),
      tailwindcss(),
      {
        name: 'lead-game-crm-api',
        configureServer(server) {
          server.middlewares.use('/api/lead-game-submissions', async (request, response) => {
            if (request.method !== 'POST') {
              sendJson(response, 405, { success: false, message: 'Method not allowed.' });
              return;
            }

            try {
              const data = await readJson(request);
              const result = await createLeadGameRecord(data);
              sendJson(response, 200, {
                success: true,
                message: 'Lead submitted to Twenty CRM.',
                result,
              });
            } catch (error) {
              console.error('[Lead Games CRM] Submission failed:', error);
              sendJson(response, 502, {
                success: false,
                message:
                  error instanceof Error
                    ? error.message
                    : 'The CRM could not be reached.',
              });
            }
          });
        },
      },
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
      allowedHosts: true,
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
      // Disable file watching when DISABLE_HMR is true to save CPU during agent edits.
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
