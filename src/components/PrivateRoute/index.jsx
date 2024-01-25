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

  return (
    <div className="fixed bottom-0 left-0 right-0 top-0 z-[1000] flex items-center justify-center bg-black opacity-95">
      <h2 className="text-2xl font-bold tracking-wide text-white md:text-4xl">
        Verifying Identity...
      </h2>
    </div>
  )
}
