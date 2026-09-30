export interface ProposalPayload {
  source?: 'proposal' | 'qualification-modal' | 'hero-demo';
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  website?: string;
  industry: string;
  goals: string[];
  budgetRange?: string;
  wantsCall?: boolean;
  notes?: string;
  consentContact?: boolean;
  consentWhatsapp?: boolean;
  monthlyTraffic?: string;
  dealValue?: string;
  timeline?: string;
  leadScore?: number;
}

export async function submitProposal(data: ProposalPayload): Promise<{ success: boolean; message: string }> {
  const response = await fetch('/api/lead-game-submissions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });

  const result = (await response.json().catch(() => null)) as
    | { success?: boolean; message?: string }
    | null;

  if (!response.ok || !result?.success) {
    throw new Error(result?.message || 'Unable to submit your request. Please try again.');
  }

  return { success: true, message: result.message || 'Submitted successfully.' };
}
