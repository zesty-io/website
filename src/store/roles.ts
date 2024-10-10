import { create } from 'zustand';

import { UserRole, Role } from './types';
import { getZestyAPI } from 'store';
import { ErrorMsg } from 'components/accounts';

const ZestyAPI = getZestyAPI();

type RolesState = {
  usersWithRoles: UserRole[];
  baseRoles: Role[];
  customRoles: Role[];
};
type RolesAction = {
  getUsersWithRoles: (instanceZUID: string) => Promise<void>;
  getRoles: (instanceZUID: string) => Promise<void>;
};

export const useRoles = create<RolesState & RolesAction>((set) => ({
  usersWithRoles: [],
  getUsersWithRoles: async (instanceZUID) => {
    try {
      const response = await ZestyAPI.getInstanceUsersWithRoles(instanceZUID);

      if (response.error) {
        throw new Error(response.error);
      } else {
        set({ usersWithRoles: response.data });
      }
    } catch (err) {
      ErrorMsg({ text: 'Failed to fetch users' });
      console.error('getUsersWithRoles error: ', err);
    }
  },

  baseRoles: [],
  customRoles: [],
  getRoles: async (instanceZUID) => {
    try {
      const response = await ZestyAPI.getInstanceRoles(instanceZUID);

      if (response.error) {
        throw new Error(response.error);
      } else {
        const _baseRoles: Role[] = [];
        const _customRoles: Role[] = [];

        // Separate base roles from custom roles
        response.data?.forEach((role: Role) => {
          if (role.static) {
            _baseRoles.push(role);
          } else {
            _customRoles.push(role);
          }
        });

        set({
          baseRoles: _baseRoles,
          customRoles: _customRoles,
        });
      }
    } catch (err) {
      ErrorMsg({ title: 'Failed to fetch roles' });
      console.error('getRoles error: ', err);
    }
  },
}));
