'use client'

import classnames from 'classnames'
import { useState } from 'react'

import Navlinks from './MenuItemLinks.jsx'

const menuItems = [
  { label: 'home', href: '/' },
  {
    label: 'shop',
    href: '#',
    subMenu: [
      { heading: 'shop', label: 'dummy', href: '#' },
      { heading: 'shop', label: 'dummy', href: '#' },
      { heading: 'shop', label: 'dummy', href: '#' },
      { heading: 'shop', label: 'dummy', href: '#' },
    ],
  },
  {
    label: 'page',
    href: '#',
    subMenu: [
      { heading: 'page', label: 'dummy', href: '#' },
      { heading: 'page', label: 'dummy', href: '#' },
      { heading: 'page', label: 'dummy', href: '#' },
      { heading: 'page', label: 'dummy', href: '#' },
    ],
  },
  { label: 'about us', href: '/about-us' },
  { label: 'contact us', href: '/contact-ud' },
]

export default function MenuItem() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mainURLHeading, setMainURLHeading] = useState('')

  const openMobileMenu = () => {
    setIsMobileMenuOpen(true)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <div className="flex justify-end p-4 md:hidden">
        <button
          className="ml-auto text-4xl text-slate-600 transition ease-in-out hover:text-slate-800"
          onClick={openMobileMenu}
        >
          <i className="bx bx-menu-alt-right"></i>
        </button>
      </div>
      <div
        className={classnames({
          'fixed bottom-0 top-0 z-[10000] w-full bg-[rgba(0,0,0,0.98)] px-8 pt-5 text-slate-300 transition-all ease-in-out md:static md:z-10 md:block md:bg-slate-950 md:pt-0': true,
          'left-0': isMobileMenuOpen,
          ' left-[-100%]': !isMobileMenuOpen,
        })}
      >
        <div className="relative flex h-full w-full flex-col items-center justify-start md:mx-auto md:flex md:w-full md:max-w-5xl md:flex-row md:items-center md:justify-between">
          <button
            className="absolute right-0 top-0 text-2xl text-slate-300 transition-colors ease-in-out hover:text-slate-100 md:hidden"
            onClick={closeMobileMenu}
          >
            <span>&times;</span>
          </button>
          <ul
            className={classnames({
              'flex flex-col md:flex-row md:space-x-8': true,
              'mt-12 md:mt-auto': isMobileMenuOpen,
            })}
          >
            {menuItems.map((item, index) => (
              <Navlinks
                key={index}
                item={item}
                mainURLHeading={mainURLHeading}
                setMainURLHeading={setMainURLHeading}
              />
            ))}
          </ul>
          <div className="flex items-center space-x-2 text-slate-100">
            <p className="text-xl">
              <i className="bx bx-phone-call mt-2 inline-block"></i>
            </p>
            <p>(219) 555-0114</p>
          </div>
        </div>
      </div>
    </>
  )
}
