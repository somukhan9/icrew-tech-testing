import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import classnames from 'classnames'

import styles from './index.module.css'

export default function ProfilePageTab({ tabs, closeShowOrderDetails }) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const [openNavigation, setOpenNavigation] = useState(false)

  const tab = parseInt(searchParams.get('tab'))

  const handleOnClick = (tab) => {
    // First show other component
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('tab', tab)
    router.replace(`?${searchParams.toString()}`, { scroll: false })

    // Then close the Order Details
    closeShowOrderDetails()
  }

  const handleNavigation = () => {
    setOpenNavigation((prev) => !prev)
  }

  const closeNavigation = () => {
    setOpenNavigation(false)
  }

  return (
    <div className="col-span-1 h-max w-full max-w-[15rem] overflow-hidden rounded-md border border-gray-200">
      <h3 className="mb-4 flex items-center justify-center p-4 text-2xl font-semibold md:items-start md:justify-start">
        <span>Navigation</span>
        <button
          className={`ml-8 rounded-md border border-gray-200 px-2 py-1 text-gray-600 transition-all duration-200 ease-in-out hover:text-black md:hidden`}
          onClick={handleNavigation}
        >
          {openNavigation ? (
            <i className="bx bx-x text-4xl"></i>
          ) : (
            <i className="bx bx-menu text-4xl"></i>
          )}
        </button>
      </h3>
      <div
        className={`flex flex-col gap-4 overflow-hidden transition-all duration-200 ease-in-out md:h-auto ${classnames(
          {
            'h-0 overflow-hidden': !openNavigation,
            'h-[344px]': openNavigation,
          },
        )}`}
      >
        {tabs.map((tabItem, index) => (
          <div
            key={tabItem.id}
            className={`group/tabItem flex items-center gap-2 px-4 py-2 transition-all duration-200 ease-in-out hover:cursor-pointer ${classnames(
              {
                'border-l-4 border-[#20B526] bg-[#EDF2EE]': tab === tabItem.id,
                'bg-transparent': tab !== tabItem.id,
              },
            )}`}
            onClick={() => {
              handleOnClick(tabItem.id)
              closeNavigation()
            }}
          >
            <i
              className={`${
                tabItem.iconClass
              } text-xl transition-all duration-200 ease-in-out group-hover/tabItem:text-black ${classnames(
                {
                  'text-black': tab === tabItem.id,
                  'text-[#CCCCCC]': tab !== tabItem.id,
                },
              )}`}
            >
              {tabItem.icon}
            </i>
            <p
              className={`text-[#666666] transition-all duration-200 ease-in-out group-hover/tabItem:text-black ${classnames(
                {
                  'text-black': tab === tabItem.id,
                },
              )}`}
            >
              {tabItem.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
