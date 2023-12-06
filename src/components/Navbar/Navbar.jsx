'use client'

import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import 'boxicons'
import AuthModal from './AuthDropDownMenu'

export default function Navbar() {
  const authMenuRef = useRef()
  const authIconButtonRef = useRef()
  const [openDropDown, setOpenDropDown] = useState(false)
  const [isLoggedIn, setLoggedIn] = useState(false)

  const openAuthDropDown = () => {
    setOpenDropDown(true)
  }

  const closeAuthDropDown = () => {
    setOpenDropDown(false)
  }

  useEffect(() => {
    window.addEventListener('click', function (e) {
      if (
        e.target !== authMenuRef.current &&
        e.target !== authIconButtonRef.current
      ) {
        setOpenDropDown(false)
      }
    })
  }, [])

  return (
    <nav className="sticky top-0 z-50">
      <div className="Navbar__nav-items-container">
        <div>
          {/* LOGO */}
          <Link href="/">
            <div className="flex items-center space-x-3">
              <Image
                src="/assets/images/pengooin-img.png"
                alt="pengooin image"
                height={40}
                width={40}
                className="aspect-square rounded-full object-cover"
              />
              <Image
                src="/assets/images/pengooin-text.png"
                alt="pengooin text"
                height={50}
                width={100}
                className="aspect-auto object-cover"
              />
            </div>
          </Link>
        </div>
        {/* SEARCH BAR */}
        <div className="Navbar__nav-search-bar-container">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 bg-transparent px-2 outline-none"
          />
          <button className="bg-blue-700 px-3 py-2 text-white transition-all ease-in-out hover:bg-blue-600">
            Search
          </button>
        </div>
        {/* AUTH LINKS */}
        <div className="flex items-center space-x-6">
          <Link
            onClick={closeAuthDropDown}
            href="/cart"
            className="Navbar__auth-links-link"
          >
            <i className="bx bxs-cart"></i>
          </Link>
          <div className="relative">
            <button
              onClick={openAuthDropDown}
              className="Navbar__auth-links-link"
            >
              <i ref={authIconButtonRef} className="bx bxs-user"></i>
            </button>
            {openDropDown && (
              <AuthModal
                authMenuRef={authMenuRef}
                isLoggedIn={isLoggedIn}
                setOpenDropDown={setOpenDropDown}
              />
            )}
          </div>
          <button
            className="Navbar__auth-links-link mb-1 flex items-center"
            onClick={closeAuthDropDown}
          >
            <span className="text-sm">EN</span>
            <box-icon name="chevron-down"></box-icon>
          </button>
        </div>
      </div>
    </nav>
  )
}
