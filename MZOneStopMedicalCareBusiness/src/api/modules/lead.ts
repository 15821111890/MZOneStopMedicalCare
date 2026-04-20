import { request } from '../http';

export interface Lead {
  leadId: string;
  firstName: string;
  lastName: string;
  fullName: string;
  email: string;
  phone: string;
  country: string;
  medicalInterest: string;
  message: string;
  source: string;
  status: number;
  createdAt: string;
  updatedAt: string;
}

export interface LeadListQuery {
  page?: number;
  pageSize?: number;
  keyword?: string;
  medicalInterest?: string;
}

export interface LeadListResult {
  page: number;
  pageSize: number;
  total: number;
  items: Lead[];
}

export function listLeads(params: LeadListQuery) {
  return request<LeadListResult>({ url: '/lead', method: 'GET', params });
}

export function getLead(leadId: string) {
  return request<Lead>({ url: `/lead/${leadId}`, method: 'GET' });
}

export function updateLead(leadId: string, payload: { status?: number }) {
  return request<Lead>({ url: `/lead/${leadId}`, method: 'PATCH', data: payload });
}
