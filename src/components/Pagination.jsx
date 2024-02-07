'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import classnames from 'classnames'

import { dummyProducts as data } from '@/dummyProducts'
import Spinner from './Spinner'

export default function Pagination({ totalPage, products }) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isClient, setIsClient] = useState(false)

  const currentPage = parseInt(searchParams.get('page')) || 1

  const pages = []

  for (let i = 0; i < totalPage; i++) {
    pages.push(i + 1)
  }

  const navigateToPreviousPage = () => {
    if (currentPage - 1 >= 1) {
      const srcParam = new URLSearchParams(window.location.search)

      srcParam.set('page', currentPage - 1)

      router.push(`?${srcParam.toString()}`, { scroll: false })
    }
  }

  const navigateToNextPage = () => {
    if (currentPage + 1 <= totalPage) {
      const srcParam = new URLSearchParams(window.location.search)

      srcParam.set('page', currentPage + 1)

      router.push(`?${srcParam.toString()}`, { scroll: false })
    }
  }

  const navigateToNthPage = (page) => {
    const srcParam = new URLSearchParams(window.location.search)

    srcParam.set('page', page)

    router.push(`?${srcParam.toString()}`, { scroll: false })
  }

  useEffect(() => {
    const handleInvalidPageRedirection = () => {
      const urlSearch = new URLSearchParams(window.location.search)

      if (currentPage <= 0) {
        urlSearch.set('page', 1)
        router.replace(`?${urlSearch.toString()}`, { scroll: false })
      } else if (currentPage > totalPage) {
        urlSearch.set('page', totalPage)
        router.replace(`?${urlSearch.toString()}`, { scroll: false })
      } else if (currentPage === NaN) {
        urlSearch.set('page', 1)
        router.replace(`?${urlSearch.toString()}`, { scroll: false })
      }
    }

    setIsClient(true)

    handleInvalidPageRedirection()
  }, [router, currentPage, totalPage])

  if (!isClient) {
    return (
      <div className="flex h-24 w-full items-center justify-center">
        <Spinner />
      </div>
    )
  }

  return (
    <>
      <div className="mx-auto my-8 grid h-[80%] w-[90%] grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4">
        {products.map((p, i) => (
          <div
            key={p.id}
            className="group col-span-1 flex flex-col justify-center rounded-md border border-gray-200 hover:border hover:border-green-600 hover:shadow-lg"
          >
            <Link href={`/products/${p.slug}`}>
              <div className="relative m-auto h-[120px] w-[120px]">
                <Image
                  src={p.productImages[0].url.secure_url}
                  fill
                  alt="Category items"
                  className="object-cover"
                />
              </div>
              <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
                {p.title}
              </p>
              <div className="mb-1 mt-1 flex w-[95%] items-center justify-between">
                <div className="flex w-[80%] justify-start sm:w-[60%]">
                  {p.discount > 0 && (
                    <p className="ml-1 text-base font-semibold sm:ml-5">
                      ৳ {p.afterDiscountPrice}
                    </p>
                  )}
                  <p
                    className={`ml-2 text-base font-semibold sm:ml-3 ${classnames(
                      {
                        'text-gray-500 line-through ': p.discount > 0,
                      },
                    )}`}
                  >
                    ৳ {p.price}
                  </p>
                </div>
                <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {totalPage > 1 && (
        <div className="mx-auto mb-10 flex w-max rounded-lg bg-white font-[Poppins]">
          <button
            disabled={currentPage === 1}
            onClick={navigateToPreviousPage}
            className="mr-4 flex h-12 items-center justify-center rounded-full border-2 border-gray-200 px-4 text-gray-500
                hover:border-green-600 hover:bg-green-600 hover:text-white disabled:border-gray-300 disabled:bg-gray-300 disabled:hover:border-gray-300 disabled:hover:bg-none disabled:hover:text-gray-500"
          >
            <i className="bx bx-left-arrow-alt bx-sm"></i>
          </button>
          {pages.map((page, index) => (
            <button
              key={index}
              disabled={page === currentPage}
              onClick={() => {
                navigateToNthPage(page)
              }}
              className={`mr-4 h-12 w-12 rounded-full border-0
                    border-green-600 text-lg text-gray-600 ${
                      currentPage === page && 'bg-green-600 text-white'
                    }`}
            >
              {page}
            </button>
          ))}
          <button
            disabled={currentPage === totalPage}
            onClick={navigateToNextPage}
            className="flex h-12  items-center justify-center rounded-full border-2 border-gray-200
                    px-4 text-gray-500 hover:border-green-600 hover:bg-green-600 hover:text-white disabled:border-gray-300 disabled:bg-gray-300 disabled:hover:border-gray-300 disabled:hover:bg-none disabled:hover:text-gray-500"
          >
            <i className="bx bx-right-arrow-alt bx-sm"></i>
          </button>
        </div>
      )}
    </>
  )
}
