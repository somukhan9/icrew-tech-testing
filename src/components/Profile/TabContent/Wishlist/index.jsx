import Image from 'next/image'

import classnames from 'classnames'

const data = [
  {
    id: 1,
    image: '/assets/images/PDP/p1.png',
    title: 'Red Capsicum',
    price: 14.0,
    stockStatus: 'in stock',
  },
  {
    id: 2,
    image: '/assets/images/PDP/p2.png',
    title: 'Green Capsicum',
    price: 14.0,
    stockStatus: 'in stock',
  },
  {
    id: 3,
    image: '/assets/images/PDP/p3.png',
    title: 'Green Chili',
    price: 26.7,
    stockStatus: 'in stock',
  },
  {
    id: 4,
    image: '/assets/images/PDP/p4.png',
    title: 'Cucumber',
    price: 28.0,
    stockStatus: 'out of stock',
  },
]

export default function Wishlist() {
  return (
    <div className="w-full rounded-md border border-gray-200 shadow-lg">
      <div className="justify-left mb-4 flex items-center p-4">
        <h1 className="text-3xl font-semibold text-[#1A1A1A]">My Wishlist</h1>
      </div>

      <div className="relative overflow-x-auto">
        <table className="w-full text-left">
          <thead className="">
            <tr className="border-b border-t border-gray-200 text-sm font-medium uppercase text-[#808080]">
              <td className="whitespace-nowrap px-4 py-2">product</td>
              <td className="whitespace-nowrap px-4 py-2">price</td>
              <td className="whitespace-nowrap px-4 py-2">stock status</td>
              <td className="sr-only">Buttons</td>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
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
                  <h4
                    className={`w-max p-2 text-sm capitalize  ${classnames({
                      'rounded-md bg-[#20B52633] text-[#2C742F]':
                        order.stockStatus === 'in stock',
                      'rounded-md bg-[#EA4B4833] text-[#EA4B48]':
                        order.stockStatus === 'out of stock',
                    })}`}
                  >
                    {order.stockStatus}
                  </h4>
                </td>
                <td className="whitespace-nowrap px-4 py-2">
                  <div className="flex w-full items-center gap-4">
                    <button
                      className={`flex min-w-[120px] flex-1 items-center justify-center gap-2 rounded-full bg-[#00B207] py-2 text-white transition-all duration-200 hover:opacity-80`}
                    >
                      <p>Add to Cart</p>
                    </button>
                    <button className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-gray-300 bg-white text-[#666666]">
                      <span className="text-xl">&times;</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
