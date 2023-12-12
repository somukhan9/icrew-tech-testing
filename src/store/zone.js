import { create } from 'zustand'

export const useZoneStore = create((set) => ({
  zones: [],
  collectZones: (payload) => set((state) => ({ zones: payload })),
}))
