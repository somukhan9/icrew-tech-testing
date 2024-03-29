'use client'

import Spinner from '@/components/Spinner'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import styles from './index.module.css'

export default function BreadCrumb() {
  const [origin, setOrigin] = useState('')
  //   let url = new URLSearchParams(window.location.search)
  const [urls, setUrls] = useState([])
  const [isClient, setIsClient] = useState(false)
  let urlQueue = []
  let url = ''

  //   if (typeof window !== 'undefined') {
  //     const pathUrls = window.location.pathname
  //       .split('/')
  //       .filter((item) => item !== '')
  //     urlQueue = [...urlQueue, pathUrls[0]]
  //   }

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setOrigin(window.location.origin)
      const pathUrls = window.location.pathname
        .split('/')
        .filter((item) => item !== '')
      setUrls(pathUrls)
      setIsClient(true)
    }
  }, [])

  return (
    <div className={styles.breadCrumbContainer}>
      {!isClient ? (
        <Spinner />
      ) : (
        <div className="mx-auto flex items-center gap-2 text-gray-500">
          <Link
            href={origin}
            className="flex items-center text-lg hover:text-black"
          >
            <i className="bx bx-home text-xl"></i>
          </Link>
          {urls.map((item, index) => {
            urlQueue.push(item)
            url = origin + '/' + urlQueue.join('/')

            return (
              <div key={index} className="flex items-center gap-2 text-lg">
                <i className="bx bx-chevron-right mt-1 block text-xl"></i>
                {index === urls.length - 1 ? (
                  <span className="block">{item}</span>
                ) : (
                  <Link href={`${url}`} className="block hover:text-black">
                    {item}
                  </Link>
                )}
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
