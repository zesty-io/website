import { create } from 'zustand';

import { UserRole, Role, GranularRole } from './types';
import { getZestyAPI } from 'store';
import { ErrorMsg } from 'components/accounts';
import { RoleDetails } from 'components/accounts/roles/CreateCustomRoleDialog';
import { NewGranularRole } from 'components/accounts/roles/EditCustomRoleDialog/tabs/Permissions';

const ZestyAPI = getZestyAPI();

type RolesState = {
  usersWithRoles: UserRole[];
  baseRoles: Role[];
  customRoles: Role[];
};
type RolesAction = {
  getUsersWithRoles: (instanceZUID: string) => Promise<void>;
  getRoles: (instanceZUID: string) => Promise<void>;
  createRole: (data: RoleDetails & { instanceZUID: string }) => Promise<void>;
  updateRole: ({
    roleZUID,
    name,
    description,
  }: {
    roleZUID: string;
    name: string;
    description: string;
  }) => Promise<void>;
  createGranularRole: ({
    roleZUID,
    data,
  }: {
    roleZUID: string;
    data: NewGranularRole & { name: string };
  }) => Promise<void>;
  updateGranularRole: ({
    roleZUID,
    granularRoles,
  }: {
    roleZUID: string;
    granularRoles: Partial<GranularRole>[];
  }) => Promise<void>;
  deleteGranularRole: ({
    roleZUID,
    resourceZUIDs,
  }: {
    roleZUID: string;
    resourceZUIDs: string[];
  }) => Promise<void>;
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
        return response.data;
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
  createRole: async ({ name, description, systemRoleZUID, instanceZUID }) => {
    if (!name && !systemRoleZUID) return;

    try {
      const res = await ZestyAPI.createRole(
        name,
        instanceZUID,
        systemRoleZUID,
        description,
      );

      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data;
      }
    } catch (err) {
      ErrorMsg({ title: 'Failed to create role' });
      console.error('Failed to create role: ', err);
    }
  },
  updateRole: async ({ roleZUID, name, description }) => {
    if (!roleZUID || !name) return;
    try {
      const res = await ZestyAPI.updateRole(roleZUID, { name, description });

      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data;
      }
    } catch (err) {
      ErrorMsg({ title: 'Failed to update role' });
      console.error('Failed to update role: ', err);
    }
  },

  createGranularRole: async ({ roleZUID, data }) => {
    if (!roleZUID || !data || !Object.keys(data)?.length) return;

    try {
      const res = await ZestyAPI.createGranularRole(
        roleZUID,
        data.resourceZUID,
        data.create,
        data.read,
        data.update,
        data.delete,
        data.publish,
      );

      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data;
      }
    } catch (err) {
      ErrorMsg({ title: 'Failed to create granular role' });
      console.error('Failed to update role: ', err);
    }
  },
  updateGranularRole: async ({ roleZUID, granularRoles }) => {
    if (!roleZUID || !granularRoles) return;

    try {
      const res = await ZestyAPI.batchUpdateGranularRoles(
        roleZUID,
        granularRoles,
      );

      if (res.error) {
        throw new Error(res.error);
      } else {
        return res.data;
      }
    } catch (err) {
      ErrorMsg({ title: 'Failed to update granular role' });
      console.error('Failed to update granular role: ', err);
    }
  },
  deleteGranularRole: async ({ roleZUID, resourceZUIDs }) => {
    if (!roleZUID || !resourceZUIDs || !resourceZUIDs?.length) return;

    try {
      // const res = await ZestyAPI.deleteGranularRole()
      Promise.all([
        resourceZUIDs.forEach((zuid) =>
          ZestyAPI.deleteGranularRole(roleZUID, zuid),
        ),
      ])
        .then((res) => {
          console.log('delete response', res);
          return res;
        })
        .catch((err) => {
          throw new Error(err);
        });
    } catch (err) {
      ErrorMsg({ title: 'Failed to delete granular role' });
      console.error('Failed to delete granular role: ', err);
    }
  },
}));
