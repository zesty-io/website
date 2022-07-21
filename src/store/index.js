import { getCookie } from 'cookies-next';
import { fetchWrapperOptions, getUserAppSID } from 'utils';
import create from 'zustand';

const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
const userAppSID = getUserAppSID();

export const useZestyStore = create((set) => ({
  ZestyAPI:
    typeof window === 'undefined'
      ? null
      : new Zesty.FetchWrapper(instanceZUID, userAppSID, fetchWrapperOptions()),
  setZestyAPI: (data) => set((state) => ({ ZestyAPI: data })),
  isAuthenticated: false,
  setisAuthenticated: (data) => set((state) => ({ isAuthenticated: data })),
  isUser: false,
  setisUser: (data) => set((state) => ({ isUser: data })),
  workingInstance: '',
  setworkingInstance: (data) => set((state) => ({ workingInstance: data })),
}));
