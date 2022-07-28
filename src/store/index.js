import { getCookie } from 'cookies-next';
import { fetchWrapperOptions, getUserAppSID } from 'utils';
import create from 'zustand';

export const useZestyStore = create((set) => {
  const getInstanceZUID = () => {
    if (typeof window !== 'undefined') {
      return window?.location?.pathname?.split('/')[2];
    }
  };

  const instanceZUID = getCookie('ZESTY_WORKING_INSTANCE') || getInstanceZUID();
  const userAppSID = getUserAppSID();

  const getZestyAPI = () => {
    if (typeof window !== 'undefined') {
      return new Zesty.FetchWrapper(
        instanceZUID,
        userAppSID,
        fetchWrapperOptions(),
      );
    }
  };

  return {
    instanceZUID,
    userAppSID,
    ZestyAPI: getZestyAPI(),
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
  };
});
