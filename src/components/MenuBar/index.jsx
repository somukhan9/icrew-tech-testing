'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classnames from 'classnames'
import { useEffect, useState } from 'react'

import styles from './index.module.css'
import Shop from './Shop'

export default function MenuItem() {
  const pathname = usePathname()
  const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false)

  const openHamburgerMenu = () => {
    setIsHamburgerMenuOpen(true)
  }

  const closeHamburgerMenu = () => {
    setIsHamburgerMenuOpen(false)
  }

  const handleHamburgerMenu = () => {
    if (isHamburgerMenuOpen) {
      closeHamburgerMenu()
    } else {
      openHamburgerMenu()
    }
  }

  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', function (e) {
      if (this.scrollY >= 100) {
        closeHamburgerMenu()
      }
    })
  }

  return (
    <div className={styles.menuBarContainer}>
      <button
        className={`${styles.menuBarHamburgerBtn}
        ${classnames({
          'rotate-0': !isHamburgerMenuOpen,
          'rotate-180': isHamburgerMenuOpen,
        })}
        `}
        onClick={handleHamburgerMenu}
      >
        {isHamburgerMenuOpen ? (
          <>&times;</>
        ) : (
          <i className="bx bx-menu-alt-right"></i>
        )}
      </button>

      <div
        className={`${styles.menuBarContentContainer} ${classnames({
          'left-0': isHamburgerMenuOpen,
          'left-[-180%]': !isHamburgerMenuOpen,
        })}`}
      >
        <div className={styles.menuBarLinksContainer}>
          <button
            onClick={closeHamburgerMenu}
            className={`absolute right-0 top-0 text-2xl md:hidden`}
          >
            &times;
          </button>
          <ul className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4">
            <li
              className={`${styles.menuBarLink} ${classnames({
                'text-slate-100': pathname === '/',
              })}`}
            >
              <Link href="/">Home</Link>
            </li>

            {/* Shop DropDown */}
            <Shop />

            <li
              className={`${styles.menuBarLink} ${classnames({
                'text-slate-100': pathname === '/about-us',
              })}`}
            >
              <Link href="/about-us">About Us</Link>
            </li>
            <li
              className={`${styles.menuBarLink} ${classnames({
                'text-slate-100': pathname === '/contact-us',
              })}`}
            >
              <Link href="/contact-us">Contact Us</Link>
            </li>
          </ul>
          <p className="mt-4 flex items-center gap-2 md:mt-0">
            <i className="bx bx-phone-call mt-1 text-xl"></i>
            <span>(219) 555-0114</span>
          </p>
        </div>
      </div>
    </div>
  )
}
