import { create } from 'zustand';

export const useRoles = create((set) => ({
  usersWithRoles: [],
  setUsersWithRoles: (data) => set({ usersWithRoles: data }),
}));
