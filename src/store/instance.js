import { create } from 'zustand';

export const useInstance = create((set) => ({
  instanceFields: [],
  setInstanceFields: (data) => set({ fields: data }),
  instanceModels: [],
  setInstanceModels: (data) => set({ models: data }),
}));
