import Image from 'next/image'
import Link from 'next/link'

import ProfileImage from '../profile.png'
import OrderDetails from '../OrderDetails'

const recentOrders = [
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
]

export default function Dashboard({
  showOrderDetails,
  openShowOrderDetails,
  closeShowOrderDetails,
  orderId,
}) {
  if (showOrderDetails) {
    return (
      <OrderDetails
        order={recentOrders[0]}
        closeShowOrderDetails={closeShowOrderDetails}
      />
    )
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap items-center gap-4 md:flex-nowrap md:items-start">
        <div className="flex flex-auto flex-col items-start justify-center gap-2 rounded-md border border-gray-200 p-4 md:items-center">
          <div className="relative h-[120px] w-[120px] overflow-hidden rounded-full object-cover">
            <Image src={ProfileImage} alt="Profile Image" fill />
          </div>
          <div>
            <h1 className="text-xl font-medium text-[#1A1A1A]">
              Dianne Russell
            </h1>
            <p className="mb-4 text-sm text-[#808080]">Customer</p>
            <Link href="#" className="text-base font-medium text-[#00B207]">
              Edit Profile
            </Link>
          </div>
        </div>
        <div className="flex flex-auto flex-col gap-2 rounded-md border border-gray-200 p-4">
          <p className="text-base font-medium text-[#999999]">
            Billing Address
          </p>
          <h3 className="text-lg font-medium text-[#1A1A1A]">Dainne Russell</h3>
          <p className="text-sm text-[#666666]">
            4140 Parker Rd. Allentown, New Mexico 31134
          </p>
          <p className="text-base text-[#1A1A1A]">dainne.ressell@gmail.com</p>
          <p className="text-base text-[#1A1A1A]">(671) 555-0110</p>
          <Link href="#" className="mt-8 text-base font-medium text-[#00B207]">
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="rounded-md border border-gray-200 pb-2 shadow-lg">
        <div className="flex flex-wrap items-center justify-between p-4">
          <h3 className="text-xl font-medium text-[#1A1A1A]">
            Recent Order History
          </h3>
          <Link
            href={`/profile?tab=2`}
            className="text-base font-medium text-[#00B207]"
          >
            View All
          </Link>
        </div>
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
                <th scope="col" className="sr-only">
                  View
                </th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {recentOrders.map((order, index) => (
                <tr key={index} className="text-sm font-normal text-[#333333]">
                  <td className="whitespace-nowrap px-4 py-2">#{order.id}</td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {order.orderDate}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    ${order.price} ({order.quantity} Products)
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    {order.status}
                  </td>
                  <td className="whitespace-nowrap px-4 py-2">
                    <button
                      onClick={() => openShowOrderDetails(order.id)}
                      className="font-medium text-[#00B207]"
                    >
                      View Details
                    </button>
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
