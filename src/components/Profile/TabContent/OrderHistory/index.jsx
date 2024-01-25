import { useEffect, useState } from 'react'
import Link from 'next/link'
import classnames from 'classnames'

import Spinner from '@/components/Spinner'
import OrderDetails from '../OrderDetails'

const orders = [
  {
    id: '738',
    orderDate: '8 Sep, 2020',
    price: 135.0,
    quantity: 5,
    status: 'Processing',
  },
  {
    id: '703',
    orderDate: '24 May, 2020',
    price: 25.0,
    quantity: 1,
    status: 'on the way',
  },
  {
    id: '130',
    orderDate: '22 Oct, 2020',
    price: 250.0,
    quantity: 4,
    status: 'Completed',
  },
  {
    id: '561',
    orderDate: '1 Feb, 2020',
    price: 35.0,
    quantity: 1,
    status: 'Completed',
  },
  {
    id: '536',
    orderDate: '21 Sep, 2020',
    price: 578.0,
    quantity: 13,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '738',
    orderDate: '8 Sep, 2020',
    price: 135.0,
    quantity: 5,
    status: 'Processing',
  },
  {
    id: '703',
    orderDate: '24 May, 2020',
    price: 25.0,
    quantity: 1,
    status: 'on the way',
  },
  {
    id: '130',
    orderDate: '22 Oct, 2020',
    price: 250.0,
    quantity: 4,
    status: 'Completed',
  },
  {
    id: '561',
    orderDate: '1 Feb, 2020',
    price: 35.0,
    quantity: 1,
    status: 'Completed',
  },
  {
    id: '536',
    orderDate: '21 Sep, 2020',
    price: 578.0,
    quantity: 13,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '738',
    orderDate: '8 Sep, 2020',
    price: 135.0,
    quantity: 5,
    status: 'Processing',
  },
  {
    id: '703',
    orderDate: '24 May, 2020',
    price: 25.0,
    quantity: 1,
    status: 'on the way',
  },
  {
    id: '130',
    orderDate: '22 Oct, 2020',
    price: 250.0,
    quantity: 4,
    status: 'Completed',
  },
  {
    id: '561',
    orderDate: '1 Feb, 2020',
    price: 35.0,
    quantity: 1,
    status: 'Completed',
  },
  {
    id: '536',
    orderDate: '21 Sep, 2020',
    price: 578.0,
    quantity: 13,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '492',
    orderDate: '22 Oct, 2020',
    price: 345.0,
    quantity: 7,
    status: 'Completed',
  },
  {
    id: '738',
    orderDate: '8 Sep, 2020',
    price: 135.0,
    quantity: 5,
    status: 'Processing',
  },
  {
    id: '703',
    orderDate: '24 May, 2020',
    price: 25.0,
    quantity: 1,
    status: 'on the way',
  },
  {
    id: '130',
    orderDate: '22 Oct, 2020',
    price: 250.0,
    quantity: 4,
    status: 'Completed',
  },
  {
    id: '561',
    orderDate: '1 Feb, 2020',
    price: 35.0,
    quantity: 1,
    status: 'Completed',
  },
]

export default function OrderHistory({
  showOrderDetails,
  openShowOrderDetails,
  closeShowOrderDetails,
}) {
  const [isClient, setIsClient] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [contentPerPage, setContentPerPage] = useState(5)
  const [totalPages, setTotalPages] = useState(
    Math.ceil(orders.length / contentPerPage),
  )
  const [pages, setPages] = useState([])
  const [currentPageOrders, setCurrentPageOrders] = useState([])

  const goToCurrentPage = (pageNumber) => {
    setCurrentPage(pageNumber)
  }

  const goToPrevPage = () => {
    if (currentPage != 1) {
      setCurrentPage((prev) => prev - 1)
    }
  }

  const goToNextPage = () => {
    if (currentPage != pages[pages.length - 1]) {
      setCurrentPage((prev) => prev + 1)
    }
  }

  useEffect(() => {
    let pageArray = []
    for (let i = 0; i < totalPages; i++) {
      pageArray.push(i + 1)
    }

    setPages(pageArray)
    setIsClient(true)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    setCurrentPageOrders(
      orders.slice(
        contentPerPage * (currentPage - 1),
        contentPerPage * (currentPage - 1) + contentPerPage,
      ),
    )
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  if (!isClient) return <Spinner />

  if (showOrderDetails) {
    return (
      <OrderDetails
        order={orders[0]}
        closeShowOrderDetails={closeShowOrderDetails}
      />
    )
  }

  return (
    <div className="w-full rounded-md border border-gray-200 shadow-lg">
      <h1 className="relative overflow-x-auto p-4 text-xl font-medium text-[#1A1A1A]">
        Order History
      </h1>
      <div className="relative overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-[#F2F2F2] text-left text-xs text-[#4D4D4D]">
              <th scope="col" className="whitespace-nowrap px-4 py-2">
                ORDER ID
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-2">
                DATE
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-2">
                TOTAL
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-2">
                STATUS
              </th>
              <th scope="col" className="whitespace-nowrap px-4 py-2"></th>
            </tr>
          </thead>
          <tbody className=" divide-y divide-gray-200">
            {currentPageOrders.map((order, index) => (
              <tr key={index} className="text-sm font-normal text-[#333333]">
                <td className="whitespace-nowrap px-4 py-2">#{order.id}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  {order.orderDate}
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  ${order.price} ({order.quantity} Products)
                </td>
                <td className="whitespace-nowrap px-4 py-2">{order.status}</td>
                <td className="whitespace-nowrap px-4 py-2">
                  <button
                    className="font-medium text-[#00B207]"
                    onClick={() => openShowOrderDetails(order.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-center px-4 py-6">
        <button
          disabled={currentPage === 1}
          onClick={goToPrevPage}
          className="mr-2 h-8 w-8 rounded-full border border-gray-300 disabled:bg-gray-300"
        >
          <i className="bx bx-chevron-left text-2xl"></i>
        </button>
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => goToCurrentPage(page)}
            className={`h-5 w-5 rounded-full text-xs font-normal text-[#666666] transition-all duration-200 ease-in-out xs:h-8 xs:w-8 xs:text-base ${classnames(
              {
                'bg-[#00B207] text-white': currentPage === page,
              },
            )}`}
          >
            {page}
          </button>
        ))}
        <button
          disabled={currentPage === pages[pages.length - 1]}
          onClick={goToNextPage}
          className={`ml-2 h-8 w-8 rounded-full border border-gray-300 disabled:bg-gray-300`}
        >
          <i className="bx bx-chevron-right text-2xl"></i>
        </button>
      </div>
    </div>
  )
}
