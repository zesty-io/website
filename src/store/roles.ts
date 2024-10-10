import { create } from 'zustand';
import { UserRole, Role } from './types';

type RolesState = {
  usersWithRoles: UserRole[];
  baseRoles: Role[];
  customRoles: Role[];
};
type RolesAction = {
  setUsersWithRoles: (data: UserRole[]) => void;
  setBaseRoles: (data: Role[]) => void;
  setCustomRoles: (data: Role[]) => void;
};

export const useRoles = create<RolesState & RolesAction>((set) => ({
  usersWithRoles: [],
  setUsersWithRoles: (data) => set({ usersWithRoles: data }),
  baseRoles: [],
  setBaseRoles: (data) => set({ baseRoles: data }),
  customRoles: [],
  setCustomRoles: (data) => set({ customRoles: data }),
}));
