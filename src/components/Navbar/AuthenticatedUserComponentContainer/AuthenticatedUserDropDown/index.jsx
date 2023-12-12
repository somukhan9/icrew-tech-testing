'use client'

import Link from 'next/link'

import classnames from 'classnames'

import { useAuthService } from '@/services/Auth/authService'

import styles from './index.module.css'

const authenticatedLinks = [
  { label: 'Profile', href: '/profile' },
  { label: 'Orders', href: '/orders' },
  { label: 'Settings', href: '/settings' },
]

export default function AuthenticatedUserDropDown({
  authenticatedUserElementRef,
  isOpenAuthenticatedUserDropDown,
  closeAuthenticatedUserDropDown,
}) {
  const { signOut } = useAuthService()

  const logout = () => {
    closeAuthenticatedUserDropDown()
    signOut()
  }

  return (
    <div
      ref={authenticatedUserElementRef}
      className={`${styles.authenticatedUserDropDownContainer} ${classnames({
        'scale-0': !isOpenAuthenticatedUserDropDown,
        'scale-100': isOpenAuthenticatedUserDropDown,
      })}`}
    >
      <button
        className={styles.authenticatedUserDropDownCloseBtn}
        onClick={closeAuthenticatedUserDropDown}
      >
        <span className="text-md absolute right-2 text-xl font-bold">
          &times;
        </span>
      </button>
      <div className="mr-8 flex-col space-y-2 p-4">
        {authenticatedLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={closeAuthenticatedUserDropDown}
            className="inline-block transition-colors hover:text-slate-100"
          >
            {link.label}
          </Link>
        ))}
        <button
          onClick={logout}
          className="inline-block transition-colors hover:text-slate-100"
        >
          Logout
        </button>
      </div>
    </div>
  )
}
