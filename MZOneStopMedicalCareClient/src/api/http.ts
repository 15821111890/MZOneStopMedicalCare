import axios from 'axios';

const baseURL = import.meta.env.VITE_API_BASE || '/api/medicine';

const instance = axios.create({ baseURL, timeout: 15000 });

instance.interceptors.response.use((resp) => {
  const body = resp.data;
  if (body && typeof body === 'object' && 'resCode' in body) {
    if (body.resCode === '00100000') return body.obj;
    const err: Error & { resCode?: string } = new Error(body.msg || 'Request failed');
    err.resCode = body.resCode;
    return Promise.reject(err);
  }
  return body;
});

export default instance;
