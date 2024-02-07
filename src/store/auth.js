import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'

const initialState = {
  isSignIn: true,
  showOTP: false,
  isLoggedIn: false,
  authToken: '',
}

export const useAuthStore = create(
  persist(
    (set) => ({
      ...initialState,

      setIsSignIn: (payload) => set((state) => ({isSignIn: payload})),

      openOTP: () => set((state) => ({ showOTP: true })),

      closeOTP: () => set((state) => ({ showOTP: false })),

      signIn: (payload) =>
        set((state) => ({ isLoggedIn: true, authToken: payload })),

      signOut: () => set((state) => ({ isLoggedIn: false, authToken: '' })),
    }),
    {
      name: 'auth-state',
    },
  ),
)
