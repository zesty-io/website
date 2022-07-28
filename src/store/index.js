import { getCookie } from 'cookies-next';
import { fetchWrapperOptions, getUserAppSID } from 'utils';
import create from 'zustand';

const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE');
const userAppSID = getUserAppSID();

export const useZestyStore = create((set) => ({
  instanceZUID,
  userAppSID,
  ZestyAPI:
    typeof window === 'undefined'
      ? null
      : new Zesty.FetchWrapper(instanceZUID, userAppSID, fetchWrapperOptions()),
  setZestyAPI: (data) => set(() => ({ ZestyAPI: data })),
  isAuthenticated: false,
  setisAuthenticated: (data) => set(() => ({ isAuthenticated: data })),
  isUser: false,
  setisUser: (data) => set(() => ({ isUser: data })),
  workingInstance: instanceZUID,
  setworkingInstance: (data) => set(() => ({ workingInstance: data })),
  verifySuccess: {},
  setverifySuccess: (data) => set(() => ({ verifySuccess: data })),
  instances: {},
  setInstances: (data) => set(() => ({ instances: data })),
  instance: {},
  setInstance: (data) => set(() => ({ instance: data })),
  loading: false,
  setloading: (data) => set(() => ({ loading: data })),
  userInfo: {},
  setuserInfo: (data) => set(() => ({ userInfo: data })),
}));
