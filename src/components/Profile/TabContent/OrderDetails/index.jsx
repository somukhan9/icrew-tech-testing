import { Fragment, useState } from 'react'
import Image from 'next/image'

import classnames from 'classnames'

import styles from './index.module.css'

const data = [
  {
    id: 1,
    image: '/assets/images/PDP/p1.png',
    title: 'Red Capsicum',
    price: 14.0,
    quantity: 5,
    subtotal: 70.0,
  },
  {
    id: 2,
    image: '/assets/images/PDP/p2.png',
    title: 'Green Capsicum',
    price: 14.0,
    quantity: 2,
    subtotal: 28.0,
  },
  {
    id: 3,
    image: '/assets/images/PDP/p3.png',
    title: 'Green Chili',
    price: 26.7,
    quantity: 10,
    subtotal: 267.0,
  },
  {
    id: 4,
    image: '/assets/images/PDP/p4.png',
    title: 'Cucumber',
    price: 28.0,
    quantity: 7,
    subtotal: 196.0,
  },
]

const progressBarData = [
  { id: 1, label: 'Order Received', number: 1 },
  { id: 2, label: 'Processing', number: 2 },
  { id: 3, label: 'On the way', number: 3 },
  { id: 4, label: 'Delivered', number: 4 },
]

export default function OrderDetails({ order, closeShowOrderDetails }) {
  const [orderStatus, setOrderStatus] = useState(1)

  return (
    <div className="w-full rounded-md border border-gray-200">
      <div className="mb-4 flex flex-col items-start justify-between border-b border-gray-200 p-4 sm:flex-row sm:items-center">
        <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-center">
          <h1 className="text-xl font-medium text-[#1A1A1A]">Order Details</h1>
          <div className="hidden h-2 w-2 rounded-full bg-[#4D4D4D] sm:block" />
          <p className="text-sm text-[#4D4D4D]">April 24, 2021</p>
          <div className="hidden h-2 w-2 rounded-full bg-[#4D4D4D] sm:block" />
          <p className="text-sm text-[#4D4D4D]">3 Products</p>
        </div>

        <button
          className="mt-5 text-base font-medium text-[#00B207] sm:mt-0"
          onClick={closeShowOrderDetails}
        >
          Back to List
        </button>
      </div>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-3">
        <div className="relative col-span-2 overflow-x-auto rounded-md border border-gray-200">
          <table className="w-full">
            <thead className="border-b border-gray-200 text-left">
              <tr className="divide-x divide-gray-200 text-sm font-medium uppercase text-[#999999]">
                <td className="p-2">Billing Address</td>
                <td className=" p-2">Shipping Address</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="divide-x divide-gray-200">
                <td className="p-2">
                  <h3 className="text-base text-[#1A1A1A]">Dainne Russell</h3>
                  <p className="text-sm text-[#666666]">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </td>
                <td className="p-2">
                  <h3 className="text-base text-[#1A1A1A]">Dainne Russell</h3>
                  <p className="text-sm text-[#666666]">
                    4140 Parker Rd. Allentown, New Mexico 31134
                  </p>
                </td>
              </tr>
              <tr className="divide-x divide-gray-200">
                <td className="p-2">
                  <p className="text-xs uppercase text-[#999999]">Email</p>
                  <h4 className="text-sm text-[#1A1A1A]">
                    dainne.ressell@gmail.com
                  </h4>
                  <p className="text-xs uppercase text-[#999999]">Phone</p>
                  <h4 className="text-sm text-[#1A1A1A]">(671) 555-0110</h4>
                </td>
                <td className=" p-2 ">
                  <p className="text-xs uppercase text-[#999999]">Email</p>
                  <h4 className="text-sm text-[#1A1A1A]">
                    dainne.ressell@gmail.com
                  </h4>
                  <p className="text-xs uppercase text-[#999999]">Phone</p>
                  <h4 className="text-sm text-[#1A1A1A]">(671) 555-0110</h4>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="relative col-span-1 overflow-x-auto rounded-md border border-gray-200">
          <table className="w-full">
            <thead className="border-b border-gray-200 p-4">
              <tr className="divide-x divide-gray-200">
                <td className="p-2">
                  <p className="w-max text-xs font-medium uppercase text-[#999999]">
                    Order ID:
                  </p>
                  <h4 className="text-sm text-[#1A1A1A]">#4152</h4>
                </td>
                <td className="p-2">
                  <p className="w-max text-xs font-medium uppercase text-[#999999]">
                    Payment Method:
                  </p>
                  <h4 className="text-sm text-[#1A1A1A]">Paypal</h4>
                </td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="p-2 text-left text-sm text-[#666666]">
                  Subtotal:
                </td>
                <td className="p-2 text-right text-sm font-medium text-[#1A1A1A]">
                  $365.00
                </td>
              </tr>
              <tr>
                <td className="p-2 text-left text-sm text-[#666666]">
                  Discount:
                </td>
                <td className="p-2 text-right text-sm font-medium text-[#1A1A1A]">
                  20%
                </td>
              </tr>
              <tr>
                <td className="p-2 text-left text-sm text-[#666666]">
                  Shipping:
                </td>
                <td className="p-2 text-right text-sm font-medium text-[#1A1A1A]">
                  Free
                </td>
              </tr>
              <tr>
                <td className="p-2 text-left text-lg text-[#1A1A1A]">Total:</td>
                <td className="p-2 text-right text-lg font-semibold text-[#2C742F]">
                  $84.00
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Progress Bar */}
      <div
        className={`my-10 mb-20 hidden flex-col items-center justify-center p-4 sm:flex`}
      >
        <div className="relative flex w-full max-w-[28rem] items-center justify-between before:absolute before:top-1/2 before:-z-10 before:block before:h-2 before:w-full before:-translate-y-1/2 before:rounded-full before:bg-[#f2f2f2]">
          {progressBarData.map((item, index) => (
            <Fragment key={index}>
              <div
                // key={index}
                className="relative flex w-max items-center justify-center"
              >
                <p className="absolute top-[200%] w-max -translate-y-[200%]">
                  {item.label}
                </p>
                <p
                  className={`flex h-12 w-12 items-center justify-center rounded-full border-2 border-dashed border-[#00B207] ${classnames(
                    {
                      'bg-[#00B207] text-white': item.number <= orderStatus,
                      'bg-white': item.number > orderStatus,
                    },
                  )}`}
                >
                  {item.number <= orderStatus ? (
                    <i className="bx bx-check text-2xl text-white"></i>
                  ) : (
                    item.number
                  )}
                </p>
              </div>
              <div
                className={`absolute top-1/2 -z-10 h-2 -translate-y-1/2 bg-[#00B207] ${classnames(
                  {
                    'w-0': orderStatus === 1,
                    'w-1/3': orderStatus === 2,
                    'w-2/3': orderStatus === 3,
                    'w-full': orderStatus === 4,
                  },
                )}`}
              />
            </Fragment>
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="relative overflow-x-auto rounded-md border border-gray-200 shadow-lg">
          <table className="w-full  text-left">
            <thead className="">
              <tr className="bg-[#F2F2F2] text-sm font-medium uppercase text-[#4D4D4D]">
                <td className="whitespace-nowrap px-4 py-2">product</td>
                <td className="whitespace-nowrap px-4 py-2">price</td>
                <td className="whitespace-nowrap px-4 py-2">quantity</td>
                <td className="whitespace-nowrap px-4 py-2">subtotal</td>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 p-2">
              {data.map((order, index) => (
                <tr key={index} className={``}>
                  <td className="whitespace-nowrap px-4 py-2">
                    <div className="flex items-center gap-4">
                      <div className="relative h-12 w-12">
                        <Image src={order.image} alt="Product Image" fill />
                      </div>
                      <h4 className="text-sm text-[#1A1A1A]">{order.title}</h4>
                    </div>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <h4 className="text-sm text-[#1A1A1A]">${order.price}</h4>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <h4 className="text-sm text-[#1A1A1A]">
                      x{order.quantity}
                    </h4>
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <h4 className="text-sm font-medium text-[#1A1A1A]">
                      ${order.subtotal}
                    </h4>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
