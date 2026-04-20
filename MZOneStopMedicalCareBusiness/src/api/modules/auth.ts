import { request } from '../http';

export interface LoginPayload {
  account: string;
  password: string;
}

export interface LoginResult {
  memberToken: string;
  memberId: string;
  account: string;
  nickName: string;
  roleType: number;
}

export function login(payload: LoginPayload) {
  return request<LoginResult>({ url: '/admin/login', method: 'POST', data: payload });
}

export function logout() {
  return request<Record<string, never>>({ url: '/admin/logout', method: 'POST' });
}

export function me() {
  return request<{
    memberId: string;
    account: string;
    nickName: string;
    roleType: number;
  }>({ url: '/admin/me', method: 'GET' });
}
