import { create } from 'zustand';
import { ContentModel } from './types';
import { getZestyAPI } from 'store';
import { ErrorMsg } from 'components/accounts';

const ZestyAPI = getZestyAPI();

type InstanceState = {
  instanceContentModels: ContentModel[];
};
type InstanceAction = {
  getInstanceModels: () => Promise<void>;
};

export const useInstance = create<InstanceState & InstanceAction>((set) => ({
  instanceContentModels: [],
  getInstanceModels: async () => {
    try {
      const response = await ZestyAPI.getModels();

      if (response.error) {
        throw new Error(response.error);
      } else {
        set({
          instanceContentModels: response.data,
        });
      }
    } catch (err) {
      ErrorMsg({ text: 'Failed to fetch content models' });
      console.error('getInstanceModels error: ', err);
    }
  },
}));
