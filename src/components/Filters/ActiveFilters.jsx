'use client'

import { useRouter, useSearchParams } from 'next/navigation'

export default function ActiveFilters() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const price = searchParams.get('price') || ''
  const rating = searchParams.get('rating') || ''
  const sorting = searchParams.get('sorting') || 'Latest'

  const router = useRouter()

  return (
    <div className="mx-auto my-2 flex w-[90%] flex-wrap items-center justify-between">
      <div className="flex flex-wrap items-center sm:justify-evenly">
        <div className="mr-5">Active Filters: </div>
        {category ? (
          <div className="group mr-3 flex w-max cursor-pointer items-center justify-between font-medium">
            <p>{category}</p>
            <i
              onClick={() => {
                const searchParams = new URLSearchParams(window.location.search)
                searchParams.delete('category')
                router.replace(`?${searchParams.toString()}`, { scroll: false })
              }}
              className="bx bx-x bx-xs ml-3 text-gray-400 group-hover:text-black"
            ></i>
          </div>
        ) : (
          ''
        )}
        {price ? (
          <div className="group mr-3 flex w-max cursor-pointer items-center justify-between font-medium">
            <p>{price}</p>
            <i
              onClick={() => {
                const searchParams = new URLSearchParams(window.location.search)
                searchParams.delete('price')
                router.replace(`?${searchParams.toString()}`, { scroll: false })
              }}
              className="bx bx-x bx-xs ml-3 text-gray-400 group-hover:text-black"
            ></i>
          </div>
        ) : (
          ''
        )}
        {rating ? (
          <div className="group mr-3 flex w-max cursor-pointer items-center justify-between font-medium">
            <p>{rating}</p>
            <i
              onClick={() => {
                const searchParams = new URLSearchParams(window.location.search)
                searchParams.delete('rating')
                router.replace(`?${searchParams.toString()}`, { scroll: false })
              }}
              className="bx bx-x bx-xs ml-3 text-gray-400 group-hover:text-black"
            ></i>
          </div>
        ) : (
          ''
        )}
      </div>
      <div>2,547 Results found</div>
    </div>
  )
}
