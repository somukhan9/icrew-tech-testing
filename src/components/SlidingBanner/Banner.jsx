'use client'
import Image from 'next/image'

export default function Banner({ product }) {
  return (
    <div
      className="Banner__container"
      style={{
        backgroundImage: product.image,
      }}
    >
      <div>
        <Image
          src={product.image}
          alt={product.sale}
          width={1400}
          height={400}
          className="absolute left-0 top-0 h-[200px] object-cover md:h-[400px]"
        />
        <div className="Banner__left-overlay"></div>
      </div>
      <div className="Banner__right-container">
        <p className=" text-md font-normal md:text-2xl">{product.sale}</p>
        <h3 className="text-md font-bold xs:text-2xl md:text-6xl">
          <span className="text-orange-400">{product.percentage}</span> OFF
        </h3>
        <p className="text-left text-xs font-[300] text-slate-300 md:text-lg">
          {product.description}
        </p>
        <button className="Banner__right-shop-now-btn">
          shop now
          <span className="ml-2 mt-1 text-xl text-white">
            <i className="bx bx-right-arrow-alt"></i>
          </span>
        </button>
      </div>
    </div>
  )
}
