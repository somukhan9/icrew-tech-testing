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
        'hidden scale-0': !isOpenAuthenticatedUserDropDown,
        'block scale-100': isOpenAuthenticatedUserDropDown,
      })}`}
    >
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
