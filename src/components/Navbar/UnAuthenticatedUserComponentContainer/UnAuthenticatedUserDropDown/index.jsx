'use client'

import classnames from 'classnames'
import AuthenticationForm from './AuthenticationForm'
import { useEffect, useRef } from 'react'

import styles from './index.module.css'

export default function UnAuthenticatedUserDropDown({
  isSignIn,
  setIsSignIn,
  isOpenUnAuthenticatedUserDropDown,
  closeUnAuthenticatedUserDropDown,
}) {
  return (
    <div
      className={`${styles.unAuthenticatedUserDropDownContainer} ${classnames({
        'scale-100': isOpenUnAuthenticatedUserDropDown,
        'scale-0': !isOpenUnAuthenticatedUserDropDown,
      })}`}
    >
      <button
        onClick={closeUnAuthenticatedUserDropDown}
        className={styles.closeUnAuthenticatedUserDropDownBtn}
      >
        <span>&times;</span>
      </button>
      <div className="mx-auto mb-4 flex w-full max-w-xs items-center justify-around">
        <button
          onClick={() => {
            setIsSignIn(true)
          }}
          className={classnames({
            'hover:text-slate-900': true,
            'font-semibold text-slate-900': isSignIn,
            'text-slate-700': !isSignIn,
          })}
        >
          Sign In
        </button>
        <div className="h-6 w-[2px] bg-slate-400" />
        <button
          onClick={() => {
            setIsSignIn(false)
          }}
          className={classnames({
            'hover:text-slate-900': true,
            'font-semibold text-slate-900': !isSignIn,
            'text-slate-700': isSignIn,
          })}
        >
          Sign Up
        </button>
      </div>
      <div className="h-[2px] w-full bg-slate-400"></div>
      {/* <h3>{isSignIn ? 'Sign In'}</h3> */}
      <AuthenticationForm isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
    </div>
  )
}
