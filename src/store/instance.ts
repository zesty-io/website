import { create } from 'zustand';
import { ContentModel } from './types';

type InstanceState = {
  instanceContentModels: ContentModel[];
};
type InstanceAction = {
  setInstanceContentModels: (data: ContentModel[]) => void;
};

export const useInstance = create<InstanceState & InstanceAction>((set) => ({
  instanceContentModels: [],
  setInstanceContentModels: (data) => set({ instanceContentModels: data }),
}));
