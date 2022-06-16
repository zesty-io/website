import { getCookie } from 'cookies-next';
import { fetchWrapperOptions, getUserAppSID } from 'utils';
import create from 'zustand';

export const useZestyStore = create((set) => ({
  ZestyAPI: null,
  setZestyAPI: (data) => set((state) => ({ ZestyAPI: data })),
  zestyProductionMode: null,
  setZestyProductionMode: (data) =>
    set((state) => ({ zestyProductionMode: data })),
}));
