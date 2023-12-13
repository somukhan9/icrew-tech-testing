import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'

import { categories } from './categories'

import styles from './index.module.css'

export default function Shop() {
  const shopDropDownIRef = useRef()
  const shopDropDownBtnRef = useRef()
  const shopDropDownLiRef = useRef()
  const shopDropDownContainerRef = useRef()
  const [isOpenShopDropDown, setIsOpenShopDropDown] = useState(false)

  const handleShopDropDown = () => {
    setIsOpenShopDropDown((prev) => !prev)
  }

  const closeDropDown = () => {
    setIsOpenShopDropDown(false)
  }

  useEffect(() => {
    window.addEventListener('click', function (e) {
      if (
        e.target !== shopDropDownBtnRef.current &&
        e.target !== shopDropDownContainerRef.current &&
        e.target !== shopDropDownIRef.current &&
        e.target !== shopDropDownLiRef.current
      ) {
        closeDropDown()
      }
    })
  }, [])

  return (
    <div className="relative z-50">
      <li
        ref={shopDropDownLiRef}
        onClick={handleShopDropDown}
        className={`flex w-max cursor-pointer items-center ${styles.menuBarLink}`}
      >
        <button ref={shopDropDownBtnRef} className="flex items-center">
          Shop
        </button>
        <div className="hidden text-2xl md:inline-block">
          <i ref={shopDropDownIRef} className="bx bx-chevron-down mt-1"></i>
        </div>
        <div
          className={`inline-block text-lg transition-all duration-300 md:hidden ${classnames(
            {
              'rotate-0': !isOpenShopDropDown,
              'rotate-180': isOpenShopDropDown,
            },
          )}`}
        >
          {isOpenShopDropDown ? (
            <i className="bx bx-minus mt-1"></i>
          ) : (
            <i className="bx bx-plus mt-2"></i>
          )}
        </div>
      </li>
      <ul
        ref={shopDropDownContainerRef}
        className={`w-max ${styles.dropDownContainerMobile} ${
          styles.dropDownContainerDesktop
        } ${classnames({
          'h-0 overflow-hidden md:h-auto md:scale-0': !isOpenShopDropDown,
          'md:scale-1 h-auto p-2 md:h-auto': isOpenShopDropDown,
        })}`}
      >
        <div className="grid grid-cols-1 gap-y-1 md:grid-cols-2 md:gap-x-10 md:gap-y-3">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <li
                onClick={closeDropDown}
                className="cursor-pointer text-sm font-semibold hover:text-slate-100 md:text-lg md:font-bold md:hover:text-slate-950"
              >
                <Link href={category.href}>{category.name}</Link>
              </li>
              <ul className="flex-col gap-1 pl-2 md:flex  md:pl-0">
                {category.subCategories?.map((subCategory, index) => (
                  <li
                    key={index}
                    onClick={closeDropDown}
                    className="cursor-pointer text-xs hover:text-slate-100 md:text-sm md:hover:text-slate-950"
                  >
                    <Link href={subCategory.href}>{subCategory.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ul>
    </div>
  )
}
