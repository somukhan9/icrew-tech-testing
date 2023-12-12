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
    window.addEventListener('click', function (e) {
      if (
        e.target !== authenticatedUserBtnRef.current &&
        e.target !== authenticatedUserElementRef.current
      ) {
        closeAuthenticatedUserDropDown()
      }
    })
  }, [])

  return (
    <>
      <div className="relative">
        <button
          onClick={toggleAuthenticatedUserDropDown}
          className={styles.link}
        >
          <i ref={authenticatedUserBtnRef} className="bx bxs-user"></i>
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
