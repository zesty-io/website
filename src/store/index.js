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
  workingInstance: instanceZUID,
  setworkingInstance: (data) => set((state) => ({ workingInstance: data })),
  verifySuccess: {},
  setverifySuccess: (data) => set((state) => ({ verifySuccess: data })),
  instances: {},
  setinstances: (data) => set((state) => ({ instances: data })),
  instance: {},
  setinstance: (data) => set((state) => ({ instance: data })),
  loading: false,
  setloading: (data) => set((state) => ({ loading: data })),
  userInfo: {},
  setuserInfo: (data) => set((state) => ({ userInfo: data })),
}));
