'use client'

import { usePathname } from 'next/navigation'

import Link from 'next/link'
import classnames from 'classnames'
import MenuItemSublinks from './MenuItemSublinks'
import 'boxicons'

export default function Navlinks({ item, mainURLHeading, setMainURLHeading }) {
  const pathname = usePathname()

  return (
    <li
      onClick={(e) =>
        setMainURLHeading((prev) => (prev !== item.label ? item.label : ''))
      }
      className={classnames({
        'group/DropDownMenu py-2 capitalize transition-colors ease-in-out hover:text-slate-100 md:py-4': true,
        'md:relative md:z-50': item.subMenu?.length > 0,
      })}
    >
      <Link
        href={item.href}
        className={classnames({
          'group/MobileMenu flex md:flex-row md:items-center': true,
          'text-slate-100': pathname === item.href,
        })}
      >
        {item.label}
        {item.subMenu?.length > 0 && (
          <>
            <i
              className={classnames({
                'bx bx-chevron-down mt-1 inline-block text-xl font-bold transition-all ease-in-out ': true,
                '-rotate-90 ': mainURLHeading === item.label,
                'rotate-0 ': mainURLHeading !== item.label,
              })}
            ></i>
          </>
        )}
      </Link>
      {item.subMenu?.length > 0 && (
        <div>
          <div
            className={classnames({
              'md:absolute md:top-12 md:hidden hover:md:block group-hover/DropDownMenu:md:block': true,
            })}
          >
            <div className="hidden md:block md:py-3">
              <div
                className="md:absolute md:left-5 md:mt-1 md:h-4 
                    md:w-4 md:rotate-45 md:bg-slate-900"
              ></div>
            </div>
            <ul
              className={classnames({
                'flex-col rounded-md bg-transparent md:flex md:gap-2 md:space-x-0 md:bg-slate-900 md:px-6 md:py-4': true,
                'ml-4 flex': mainURLHeading === item.subMenu[0].heading,
                'hidden ': mainURLHeading !== item.subMenu[0].heading,
              })}
            >
              {item.subMenu.map((subItem, index) => (
                <MenuItemSublinks key={index} subItem={subItem} />
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  )
}
