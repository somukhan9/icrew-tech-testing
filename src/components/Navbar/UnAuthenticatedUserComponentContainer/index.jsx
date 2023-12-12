'use client'

import { useState } from 'react'
import UnAuthenticatedUserDropDown from './UnAuthenticatedUserDropDown'
import styles from './index.module.css'

export default function UnAuthenticatedUserComponentContainer() {
  const [isSignIn, setIsSignIn] = useState(true)
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
    <div className="sm:relative">
      <button
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
      />
    </div>
  )
}
