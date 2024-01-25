'use client'

import { useEffect, useRef, useState } from 'react'

import AuthenticatedUserDropDown from './AuthenticatedUserDropDown'

import styles from './index.module.css'

export default function AuthenticatedUserElementContainer() {
  const authenticatedUserBtnRef = useRef()
  const authenticatedUserElementRef = useRef()

  const [isOpenAuthenticatedUserDropDown, setIsOpenAuthenticatedUserDropDown] =
    useState(false)

  const toggleAuthenticatedUserDropDown = () => {
    setIsOpenAuthenticatedUserDropDown((prev) => !prev)
  }

  const closeAuthenticatedUserDropDown = () => {
    setIsOpenAuthenticatedUserDropDown(false)
  }

  useEffect(() => {
    const handleAuthenticatedUserDropDown = (event) => {
      if (
        authenticatedUserBtnRef.current &&
        !authenticatedUserBtnRef.current.contains(event.target) &&
        authenticatedUserElementRef.current &&
        !authenticatedUserElementRef.current.contains(event.target)
      ) {
        closeAuthenticatedUserDropDown()
      }
    }

    document.addEventListener('click', handleAuthenticatedUserDropDown)

    return () => {
      document.removeEventListener('click', handleAuthenticatedUserDropDown)
    }
  }, [])

  // useEffect(() => {}, [])

  return (
    <>
      <div className="relative">
        <button
          ref={authenticatedUserBtnRef}
          onClick={toggleAuthenticatedUserDropDown}
          className={styles.link}
        >
          <i className="bx bxs-user"></i>
        </button>
        <AuthenticatedUserDropDown
          authenticatedUserElementRef={authenticatedUserElementRef}
          isOpenAuthenticatedUserDropDown={isOpenAuthenticatedUserDropDown}
          closeAuthenticatedUserDropDown={closeAuthenticatedUserDropDown}
        />
      </div>
    </>
  )
}
