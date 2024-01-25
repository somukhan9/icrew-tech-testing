'use client'
import { useEffect, useState } from 'react'
import { useAuthStore } from '@/store/auth'
import { useRouter } from 'next/navigation'

export default function PrivateRoute({ children }) {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (isClient) {
    if (typeof window !== 'undefined') {
      console.log(isLoggedIn)

      if (!isLoggedIn) {
        router.replace('/')
        return <></>
      }

      return <>{Array.isArray(children) ? children : [children]}</>
    }
  }

  return <></>
}
