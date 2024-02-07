import { useRouter } from 'next/navigation'

import { useAuthStore } from '@/store/auth'

export const useAuthService = () => {
  const authState = useAuthStore()
  const router = useRouter()

  const setIsSignIn = (payload) => {
    authState.setIsSignIn(payload)
  }

  const openOTP = () => {
    authState.openOTP()
  }

  const closeOTP = () => {
    authState.closeOTP()
  }

  const signIn = (payload) => {
    authState.signIn(payload)
  }

  const signOut = () => {
    authState.signOut()
    router.replace('/')
  }

  return { setIsSignIn, openOTP, closeOTP, signIn, signOut }
}
