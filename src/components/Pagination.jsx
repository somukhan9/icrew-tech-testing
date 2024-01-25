'use client'

import Link from 'next/link'
import { useState } from 'react'
import Image from 'next/image'
import { dummyProducts as data } from '@/dummyProducts'

export default function Pagination({ products }) {
  const [currentPage, setCurrentPage] = useState(1)
  const [recordsPerPage] = useState(16)
  const indexOfLastRecord = currentPage * recordsPerPage
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage
  const currentRecords = data.slice(indexOfFirstRecord, indexOfLastRecord)
  const nPages = Math.ceil(data.length / recordsPerPage)
  let [num, setNum] = useState(1)

  const pages = [
    { page: num },
    { page: num + 1 },
    { page: num + 2 },
    { page: num + 3 },
  ]

  function Next(page) {
    currentPage !== nPages && currentPage >= 4 && setNum(++num)
    setCurrentPage(++page)
  }
  function back(page) {
    num > 1 && setNum(--num)
    page > 1 && setCurrentPage(--page)
  }

  console.log(products)

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
                {p.name}
              </p>
              <div className="mb-1 mt-1 flex w-[95%] items-center justify-between">
                <div className="flex w-[80%] justify-start sm:w-[60%]">
                  <p className="ml-1 text-base font-semibold sm:ml-5">
                    ৳ {p.price}
                  </p>
                  <p className="ml-2 text-base font-semibold text-gray-500 line-through sm:ml-3">
                    ৳ {p.price}
                  </p>
                </div>
                <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="mx-auto mb-10 flex w-max rounded-lg bg-white font-[Poppins]">
        <button
          onClick={() => back(currentPage)}
          className="mr-4 flex h-12 items-center justify-center rounded-full border-2
                border-gray-200 px-4 text-gray-500 hover:border-green-600 hover:bg-green-600 hover:text-white"
        >
          <i className="bx bx-left-arrow-alt bx-sm"></i>
        </button>
        {pages.map((pg, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(pg.page)}
            className={`mr-4 h-12 w-12 rounded-full border-0
                    border-green-600 text-lg text-gray-600 ${
                      currentPage === pg.page && 'bg-green-600 text-white'
                    }`}
          >
            {pg.page}
          </button>
        ))}
        <button
          onClick={() => Next(currentPage)}
          className="flex h-12  items-center justify-center rounded-full border-2 border-gray-200
                    px-4 text-gray-500 hover:border-green-600 hover:bg-green-600 hover:text-white"
        >
          <i className="bx bx-right-arrow-alt bx-sm"></i>
        </button>
      </div>
    </>
  )
}
