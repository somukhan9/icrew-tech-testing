'use client'

import { useState } from 'react'
import Image from 'next/image'
import { dummyProducts as data } from '@/dummyProducts'

export default function Pagination() {
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

  return (
    <>
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5 w-[90%] h-[80%] my-8 mx-auto">
        {currentRecords.map((p, i) => (
          <div
            key={i}
            className="col-span-1 border-gray-200 border hover:border-green-600 rounded-md hover:border hover:shadow-lg flex flex-col justify-center group"
          >
            <div className="h-[120px] w-[120px] m-auto relative">
              <Image
                src={p.image}
                fill
                alt="Category items"
                className="object-cover"
              />
            </div>
            <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
              {p.name}
            </p>
            <div className="flex justify-between items-center w-[95%] mb-1 mt-1">
              <div className="flex justify-start sm:w-[60%] w-[80%]">
                <p className="text-base font-semibold sm:ml-5 ml-1">
                  ৳ {p.price}
                </p>
                <p className="text-base font-semibold sm:ml-3 ml-2 text-gray-500 line-through">
                  ৳ {p.price + p.discount}
                </p>
              </div>
              <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
            </div>
          </div>
        ))}
      </div>

      <div className="flex bg-white rounded-lg font-[Poppins] mx-auto w-max mb-10">
        <button
          onClick={() => back(currentPage)}
          className="h-12 border-2 border-gray-200 flex items-center justify-center text-gray-500
                px-4 mr-4 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white"
        >
          <i className="bx bx-left-arrow-alt bx-sm"></i>
        </button>
        {pages.map((pg, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(pg.page)}
            className={`h-12 border-0 rounded-full border-green-600 text-gray-600
                    text-lg w-12 mr-4 ${
                      currentPage === pg.page && 'bg-green-600 text-white'
                    }`}
          >
            {pg.page}
          </button>
        ))}
        <button
          onClick={() => Next(currentPage)}
          className="h-12 border-2  border-gray-200 flex items-center justify-center text-gray-500
                    px-4 rounded-full hover:bg-green-600 hover:border-green-600 hover:text-white"
        >
          <i className="bx bx-right-arrow-alt bx-sm"></i>
        </button>
      </div>
    </>
  )
}
