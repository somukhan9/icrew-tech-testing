'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import SearchBar from './SearchBar'
import AuthenticatedUserElementContainer from './AuthenticatedUserComponentContainer'
import UnAuthenticatedUserComponentContainer from './UnAuthenticatedUserComponentContainer'

import styles from './index.module.css'
import LanguageSelectionDropDown from './LanguageSelectionDropDown'
import { useZoneStore } from '@/store/zone'
import { useAuthStore } from '@/store/auth'
import Spinner from '../Spinner'

export default function Navbar() {
  const languageSelectionDropDownOpenIRef = useRef()
  const languageSelectionDropDownOpenPRef = useRef()
  const languageSelectionDropDownOpenBtnRef = useRef()
  const [isClient, setIsClient] = useState(false)
  const [isOpenSearchBar, setIsOpenSearchBar] = useState(false)
  const [isOpenLanguageDropDown, setIsOpenLanguageDropDown] = useState(false)
  const collectZones = useZoneStore((state) => state.collectZones)
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn)

  const openSearchBar = () => {
    setIsOpenSearchBar(true)
  }

  const closeSearchBar = () => {
    setIsOpenSearchBar(false)
  }

  const toggleLanguageSelectionDropDown = () => {
    setIsOpenLanguageDropDown((prev) => !prev)
  }

  const closeLanguageSelectionDropDown = () => {
    setIsOpenLanguageDropDown(false)
  }

  useEffect(() => {
    setIsClient(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <nav>
      <div className={styles.navbarContainer}>
        <div>
          {/* LOGO */}
          <Link href="/" className="mb-2 flex items-center space-x-3 xsm:mb-0">
            {/* <div > */}
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
            {/* </div> */}
          </Link>
        </div>

        {/* SEARCH BAR */}
        <SearchBar
          isOpenSearchBar={isOpenSearchBar}
          closeSearchBar={closeSearchBar}
        />

        {/* Auth Links */}
        <div className="flex items-center justify-center gap-1 xsm:gap-2">
          <button
            onClick={openSearchBar}
            className={styles.responsiveSearchBarOpenBtn}
          >
            <i className="bx bx-search-alt-2"></i>
          </button>

          <Link href="/cart" className={styles.link}>
            <i className="bx bxs-cart"></i>
          </Link>

          {/* AUTH COMPONENT */}
          {isClient ? (
            isLoggedIn ? (
              <>
                <AuthenticatedUserElementContainer />
              </>
            ) : (
              <>
                <UnAuthenticatedUserComponentContainer />
              </>
            )
          ) : (
            <Spinner />
          )}

          {/* Language Select Button */}
          <div className="relative">
            <button
              ref={languageSelectionDropDownOpenBtnRef}
              onClick={toggleLanguageSelectionDropDown}
              className={`${styles.link} flex items-center justify-center`}
            >
              <p
                ref={languageSelectionDropDownOpenPRef}
                className="inline-block h-full w-full text-sm"
              >
                Eng
              </p>
              <i
                ref={languageSelectionDropDownOpenIRef}
                className="bx bx-chevron-down inline-block"
              ></i>
            </button>

            {/* Language Selection Options Dropdown */}
            <LanguageSelectionDropDown
              languageSelectionDropDownOpenPRef={
                languageSelectionDropDownOpenPRef
              }
              languageSelectionDropDownOpenIRef={
                languageSelectionDropDownOpenIRef
              }
              languageSelectionDropDownOpenBtnRef={
                languageSelectionDropDownOpenBtnRef
              }
              isOpenLanguageDropDown={isOpenLanguageDropDown}
              closeLanguageSelectionDropDown={closeLanguageSelectionDropDown}
            />
          </div>
        </div>
      </div>
    </nav>
  )
}
