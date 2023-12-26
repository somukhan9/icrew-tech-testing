import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const initialState = {
  recentSearches: [],
}

export const useRecentSearchStore = create(
  persist(
    (set) => ({
      ...initialState,
      addToRecentSearch: (payload) =>
        set((state) => ({ recentSearches: payload })),
    }),
    {
      name: 'recent-search',
    },
  ),
)
