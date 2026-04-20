import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios';
import router from '@/router';
import { useAuthStore } from '@/stores/auth';

const baseURL = import.meta.env.VITE_API_BASE || '/api/medicine';

const instance: AxiosInstance = axios.create({
  baseURL,
  timeout: 15000
});

instance.interceptors.request.use((config) => {
  const auth = useAuthStore();
  if (auth.memberToken) {
    config.headers = config.headers || {};
    (config.headers as Record<string, string>).memberToken = auth.memberToken;
  }
  return config;
});

instance.interceptors.response.use((resp) => {
  const body = resp.data;
  if (body && typeof body === 'object' && 'resCode' in body) {
    if (body.resCode === '00100000') {
      return body.obj;
    }
    const auth = useAuthStore();
    if (['00300001', '00300002', '00300003'].includes(body.resCode)) {
      auth.logout();
      const redirect = router.currentRoute.value.fullPath;
      router.push({ name: 'login', query: { redirect } });
    }
    const err: Error & { resCode?: string } = new Error(body.msg || 'Request failed');
    err.resCode = body.resCode;
    return Promise.reject(err);
  }
  return body;
});

export function request<T = unknown>(config: AxiosRequestConfig): Promise<T> {
  return instance.request(config) as unknown as Promise<T>;
}

export default instance;
