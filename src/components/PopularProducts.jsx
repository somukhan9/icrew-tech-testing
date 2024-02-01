import Link from 'next/link'
import Image from 'next/image'
import veg from 'public/veg.png'
import fish from 'public/fish.png'
import fruits from 'public/fruits.jpg'
import { dummyProducts } from '@/dummyProducts'

const slugsForTesting = [
  'bananas',
  'yellow-bell-peppers',
  'fresh-spinach',
  'crisp-apples',
  'sweet-potatoes',
  'ripe-tomatoes',
  'organic-broccoli',
]

export default function PopularProducts() {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-evenly">
      <div className="mb-8 flex w-[90%] justify-between">
        <p className="text-3xl font-semibold text-slate-800">
          Popular Products
        </p>
        <div className="flex w-[100px] cursor-pointer items-center font-semibold text-blue-600">
          <p>View All</p>
          <i className="bx bx-right-arrow-alt bx-sm"></i>
        </div>
      </div>
      <div className="grid h-[80%] w-[90%] grid-cols-2 shadow sm:grid-cols-3 md:grid-cols-5">
        {dummyProducts.slice(0, 15).map((product, index) => {
          const i = parseInt(Math.random() * slugsForTesting.length)
          return (
            <Link
              key={index}
              href={`/products/${slugsForTesting[i]}`}
              className="group col-span-1 flex flex-col justify-center border-b border-l border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg"
            >
              {/* <div className=""> */}
              <div className="relative m-auto h-[120px] w-[120px]">
                <Image
                  src={product.image}
                  fill
                  alt={product.name}
                  className="object-cover"
                />
              </div>
              <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
                {product.name}
              </p>
              <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
                <div className="flex w-[60%] justify-evenly">
                 {product.discount && (
                    <p className="text-base font-semibold">
                    ৳ {((product.discount / 100) * product.price).toFixed(2)}
                    </p>
                 )}
                  <p
                    className={`text-base font-semibold text-gray-500 ${
                      product.discount && 'line-through'
                    }`}
                  >
                    ৳ {product.price}
                  </p>
                </div>
                <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
              </div>
              {/* </div> */}
            </Link>
          )
        })}
      </div>
    </div>
  )
}
