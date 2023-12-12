import { useAuthStore } from '@/store/auth'

export const useAuthService = () => {
  const authState = useAuthStore()

  const signIn = (payload) => {
    authState.signIn(payload)
  }

  const signOut = () => {
    authState.signOut()
  }

  return { signIn, signOut }
}
