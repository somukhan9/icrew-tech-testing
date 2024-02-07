'use client'

import { useRef, useState } from 'react'
import UnAuthenticatedUserDropDown from './UnAuthenticatedUserDropDown'
import styles from './index.module.css'
import { useAuthStore } from '@/store/auth'
import { useAuthService } from '@/services/Auth/authService'

export default function UnAuthenticatedUserComponentContainer() {
  const openUnAuthenticatedDropDownBtnRef = useRef()

  const { isSignIn } = useAuthStore((state) => state)

  const { setIsSignIn } = useAuthService()

  const [
    isOpenUnAuthenticatedUserDropDown,
    setIsOpenUnAuthenticatedUserDropDown,
  ] = useState(false)

  const toggleUnAuthenticatedUserDropDown = () => {
    setIsOpenUnAuthenticatedUserDropDown((prev) => !prev)
  }

  const closeUnAuthenticatedUserDropDown = () => {
    setIsOpenUnAuthenticatedUserDropDown(false)
  }

  return (
    <div className="xsm:relative">
      <button
        ref={openUnAuthenticatedDropDownBtnRef}
        onClick={toggleUnAuthenticatedUserDropDown}
        className={`${styles.link} flex items-center justify-center`}
      >
        <span className="inline-block text-sm">Sign In/Sign Up</span>
      </button>
      <UnAuthenticatedUserDropDown
        isSignIn={isSignIn}
        setIsSignIn={setIsSignIn}
        isOpenUnAuthenticatedUserDropDown={isOpenUnAuthenticatedUserDropDown}
        closeUnAuthenticatedUserDropDown={closeUnAuthenticatedUserDropDown}
        openUnAuthenticatedDropDownBtnRef={openUnAuthenticatedDropDownBtnRef}
      />
    </div>
  )
}
