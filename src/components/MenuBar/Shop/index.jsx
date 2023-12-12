import { useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'
import { usePathname } from 'next/navigation'

import { categories } from './categories'

import styles from './index.module.css'

export default function Shop() {
  const pathname = usePathname()
  const [isOpenShopDropDown, setIsOpenShopDropDown] = useState(false)
  const handleShopDropDown = () => {
    setIsOpenShopDropDown((prev) => !prev)
  }

  const closeDropDown = () => {
    setIsOpenShopDropDown(false)
  }

  return (
    <div className="relative z-50">
      <li
        onClick={handleShopDropDown}
        className={`flex items-center ${styles.menuBarLink} ${classnames({
          'text-slate-100': pathname === '/#shop',
        })}`}
      >
        <Link href="#shop" className="flex items-center">
          Shop
        </Link>
        <div className="hidden text-2xl md:inline-block">
          <i className="bx bx-chevron-down mt-1"></i>
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
        className={`w-max ${styles.dropDownContainerMobile} ${
          styles.dropDownContainerDesktop
        } ${classnames({
          'h-0 overflow-hidden md:h-auto md:scale-0': !isOpenShopDropDown,
          'md:scale-1 h-auto p-2 md:h-auto': isOpenShopDropDown,
        })}`}
      >
        <div className="grid gap-2 md:grid-cols-2 md:gap-10">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <li className="hover:text-slate-100 md:text-lg md:font-bold md:hover:text-slate-950">
                <Link href={category.href} onClick={closeDropDown}>
                  {category.name}
                </Link>
              </li>
              <ul className="hidden flex-col gap-1 pl-2 md:flex  md:pl-0">
                {category.subCategories?.map((subCategory, index) => (
                  <li
                    key={index}
                    onClick={closeDropDown}
                    className="hover:text-slate-100 md:hover:text-slate-950"
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
