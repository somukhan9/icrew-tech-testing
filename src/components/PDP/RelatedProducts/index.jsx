import Image from 'next/image'

import classnames from 'classnames'

import styles from './index.module.css'
import { currencyFormatter } from '@/utils/currencyFormat'

const relatedProducts = [
  {
    id: 1,
    img: '/assets/images/pdp/p1.png',
    name: 'Green Apple',
    price: 20.99,
    priceWithDiscount: 14.99,
    rating: 5,
  },
  {
    id: 2,
    img: '/assets/images/pdp/p2.png',
    name: 'Chanise Cabbage',
    price: 14.99,
    // priceWithDiscount: 14.99,
    rating: 5,
  },
  {
    id: 3,
    img: '/assets/images/pdp/p3.png',
    name: 'Green Capsicum',
    price: 14.99,
    // priceWithDiscount: 14.99,
    rating: 5,
  },
  {
    id: 4,
    img: '/assets/images/pdp/p4.png',
    name: 'Ladies Finger',
    price: 14.99,
    // priceWithDiscount: 14.99,
    rating: 5,
  },
]

export default function RelatedProducts() {
  return (
    <div>
      <h2 className="text-center text-2xl font-semibold text-[#1A1A1A]">
        Related Products
      </h2>
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {relatedProducts.map((product, index) => (
          <div
            key={index}
            className="flex flex-col gap-2 rounded-md border px-6 py-4 transition-all duration-200 ease-in-out hover:border hover:border-[#2c742f]"
          >
            <div className="relative h-[180px] w-[180px] overflow-hidden">
              <Image
                src={product.img}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm text-[#4D4D4D]">{product.name}</h3>
                <div>
                  <p className="flex gap-2">
                    {product.priceWithDiscount && (
                      <span className="text-base text-[#1A1A1A]">
                        ${product.priceWithDiscount}
                      </span>
                    )}
                    <span
                      className={`text-base  ${classnames({
                        'text-[#999999] line-through':
                          product.priceWithDiscount,
                        'text-[#1A1A1A]': !product.priceWithDiscount,
                      })}`}
                    >
                      ${product.price}
                    </span>
                  </p>
                  <div className="flex gap-1">
                    <i className="bx bxs-star color h-[12px] w-[12px] text-[#ff8a00]"></i>
                    <i className="bx bxs-star color h-[12px] w-[12px] text-[#ff8a00]"></i>
                    <i className="bx bxs-star color h-[12px] w-[12px] text-[#ff8a00]"></i>
                    <i className="bx bxs-star color h-[12px] w-[12px] text-[#ff8a00]"></i>
                    <i className="bx bxs-star color h-[12px] w-[12px] text-[#ff8a00]"></i>
                  </div>
                </div>
              </div>
              {/* Add to cart Button */}
              <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-[#F2F2F2] text-2xl transition-all duration-200 ease-in-out hover:bg-[#00B207] hover:text-white">
                <i className="bx bx-shopping-bag text-xl"></i>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
