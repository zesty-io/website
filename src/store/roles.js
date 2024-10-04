import { create } from 'zustand';

export const useRoles = create((set) => ({
  usersWithRoles: [],
  setUsersWithRoles: (data) => set({ usersWithRoles: data }),
  baseRoles: [],
  setBaseRoles: (data) => set({ baseRoles: data }),
  customRoles: [],
  setCustomRoles: (data) => set({ customRoles: data }),
}));
