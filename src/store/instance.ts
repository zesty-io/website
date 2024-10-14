import { create } from 'zustand';
import { ContentItem, ContentModel, Language } from './types';
import { getZestyAPI } from 'store';
import { ErrorMsg } from 'components/accounts';

const ZestyAPI = getZestyAPI();

type InstanceState = {
  instanceModels: ContentModel[];
  instanceContentItems: ContentItem[];
  languages: Language[];
};
type InstanceAction = {
  getInstanceModels: () => Promise<void>;
  getInstanceContentItems: () => Promise<void>;
  getLanguages: (type: 'all' | 'active') => Promise<void>;
};

export const useInstance = create<InstanceState & InstanceAction>((set) => ({
  instanceModels: [],
  getInstanceModels: async () => {
    try {
      const response = await ZestyAPI.getModels();

      if (response.error) {
        throw new Error(response.error);
      } else {
        set({
          instanceModels: response.data,
        });
      }
    } catch (err) {
      ErrorMsg({ text: 'Failed to fetch content models' });
      console.error('getInstanceModels error: ', err);
    }
  },

  instanceContentItems: [],
  getInstanceContentItems: async () => {
    try {
      const response = await ZestyAPI.searchItems();

      if (response.error) {
        throw new Error(response.error);
      } else {
        set({
          instanceContentItems: response.data,
        });
      }
    } catch (err) {
      ErrorMsg({ text: 'Failed to fetch content items' });
      console.error('getInstanceContentItems error: ', err);
    }
  },

  languages: [],
  getLanguages: async (type) => {
    try {
      const response = await ZestyAPI.getLocales(type);

      if (response.error) {
        throw new Error(response.error);
      } else {
        set({ languages: response.data });
      }
    } catch (err) {
      ErrorMsg({ text: 'Failed to fetch instance languages' });
      console.error('getLanguages error: ', err);
    }
  },
}));
