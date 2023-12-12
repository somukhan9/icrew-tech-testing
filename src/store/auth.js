import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {
  isLoggedIn: false,
  authToken: '',
}

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      signIn: (payload) =>
        set((state) => ({ isLoggedIn: true, authToken: payload })),

      signOut: () => set((state) => ({ isLoggedIn: false, authToken: '' })),
    }),
    {
      name: 'auth-state',
    },
  ),
)
