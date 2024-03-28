'use client'

import * as React from 'react'

import Link from 'next/link'

export default function OrderReceive({ order, ...props }) {
  const [isClient, setIsClient] = React.useState(false)

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) return <p>Loading...</p>

  return (
    <div className="flex flex-wrap items-start justify-between gap-4 bg-purple-700 md:gap-8">
      {/* Left Section */}
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-2">
          <h1 className="text-xl font-bold md:text-4xl">
            {order.orderOwnerName}
          </h1>
          <h3 className="text-base font-medium md:text-xl">Hurray!!!</h3>
          <h3 className="text-base font-medium md:text-xl">
            Your Order Has been Received
          </h3>
        </div>
        <div className="flex flex-col gap-2">
          <h3 className="text-base font-medium md:text-xl md:font-semibold">
            Your Order Details:
          </h3>

          <table>
            <tr>
              <td className=":p-2">Order Number</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">{order.orderNumber}</td>
            </tr>
            <tr>
              <td className=":p-2">Order Date</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">
                {String(order.orderDate.toLocaleDateString())}
              </td>
            </tr>
            <tr>
              <td className=":p-2">Order Time</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">
                {String(order.orderTime.toLocaleTimeString())}
              </td>
            </tr>
            <tr>
              <td className=":p-2">Order Amount</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">$45</td>
            </tr>
            <tr>
              <td className=":p-2">Payment Mode</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">{order.paymentMode}</td>
            </tr>
            <tr>
              <td className=":p-2">Payment Status</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">{order.paymentStatus}</td>
            </tr>
            <tr>
              <td className=":p-2">Tentative Delivery Time</td>
              <td className="p-2">:</td>
              <td className="ml-5 p-2">tentative delivery time</td>
            </tr>
          </table>
        </div>
        <div>
          <p className="text-xs md:text-base">
            For More Details, Please Go To
            <Link href="#" className="mx-2 font-medium underline">
              Your Account
            </Link>
            Page
          </p>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex h-full flex-col gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-base font-semibold md:text-2xl">
            Follow Us on Social Media
          </p>
          <div className="mt-4 flex items-center gap-4">
            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-purple-800 transition-transform duration-100 ease-in-out hover:scale-105"
            >
              <i className="bx bxl-facebook"></i>
            </Link>
            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-purple-800 transition-transform duration-100 ease-in-out hover:scale-105"
            >
              <i className="bx bxl-instagram"></i>
            </Link>
            <Link
              href="#"
              className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xl text-purple-800 transition-transform duration-100 ease-in-out hover:scale-105"
            >
              <i className="bx bxl-twitter"></i>
            </Link>
          </div>
        </div>
        <div className="mt-[20px] flex h-full flex-col gap-8 md:mt-[60px]">
          <p className="flex flex-col gap-2 text-xs font-medium md:text-base">
            <span>CONTACT ADDRESS</span>
            <span className="font-normal">{order.orderOwnerAddress}</span>
          </p>
          <p className="flex flex-col gap-2 text-xs font-medium md:text-base">
            <span>EMAIL ADDRESS</span>
            <span className="font-normal">{order.orderOwnerEmail}</span>
          </p>
          <p className="flex flex-col gap-2 text-xs font-medium md:text-base">
            <span>PHONE NUMBER</span>
            <span className="font-normal">{order.orderOwnerPhoneNumber}</span>
          </p>
        </div>
      </div>
    </div>
  )
}
