import { defineStore } from 'pinia';
import { ref } from 'vue';
import { login as loginApi, logout as logoutApi, me as meApi } from '@/api/modules/auth';

const STORAGE_KEY = 'medical_admin_token';

export interface AdminProfile {
  memberId: string;
  account: string;
  nickName: string;
  roleType: number;
}

export const useAuthStore = defineStore('auth', () => {
  const memberToken = ref<string>('');
  const profile = ref<AdminProfile | null>(null);

  function hydrate() {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw);
      memberToken.value = parsed.memberToken || '';
      profile.value = parsed.profile || null;
    } catch {
      localStorage.removeItem(STORAGE_KEY);
    }
  }

  function persist() {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ memberToken: memberToken.value, profile: profile.value })
    );
  }

  async function login(account: string, passwordMd5: string) {
    const data = await loginApi({ account, password: passwordMd5 });
    memberToken.value = data.memberToken;
    profile.value = {
      memberId: data.memberId,
      account: data.account,
      nickName: data.nickName,
      roleType: data.roleType
    };
    persist();
  }

  async function refreshProfile() {
    if (!memberToken.value) return;
    const data = await meApi();
    profile.value = data;
    persist();
  }

  async function logout() {
    if (memberToken.value) {
      try {
        await logoutApi();
      } catch {
        /* ignore */
      }
    }
    memberToken.value = '';
    profile.value = null;
    localStorage.removeItem(STORAGE_KEY);
  }

  return { memberToken, profile, hydrate, login, logout, refreshProfile };
});
