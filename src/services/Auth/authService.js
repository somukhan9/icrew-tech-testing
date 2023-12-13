import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/store/auth'

export const useAuthService = () => {
  const authState = useAuthStore()
  const router = useRouter()

  const signIn = (payload) => {
    authState.signIn(payload)
  }

  const signOut = () => {
    authState.signOut()
    router.replace('/')
  }

  return { signIn, signOut }
}
