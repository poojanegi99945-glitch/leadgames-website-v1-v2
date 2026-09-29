export interface ProposalPayload {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  website?: string;
  industry: string;
  goals: string[];
  budgetRange?: string;
  wantsCall: boolean;
  notes?: string;
  consentContact: boolean;
  consentWhatsapp: boolean;
}

export async function submitProposal(data: ProposalPayload): Promise<{ success: boolean; message: string }> {
  // TODO(owner): connect to backend
  console.info('[TezPlay Proposal Submission Stub]', {
    timestamp: new Date().toISOString(),
    sanitizedPayload: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      company: data.companyName,
      industry: data.industry,
      goals: data.goals,
      wantsCall: data.wantsCall,
    },
  });

  return {
    success: true,
    message: 'Proposal request logged to client stub. Backend integration pending.',
  };
}
