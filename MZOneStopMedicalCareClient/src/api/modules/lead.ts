import http from '../http';

export interface LeadPayload {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country?: string;
  medicalInterest?: string;
  message?: string;
}

export async function submitLead(payload: LeadPayload) {
  return http.request<unknown, { leadId: string }>({
    url: '/lead',
    method: 'POST',
    data: payload
  });
}
