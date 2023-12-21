'use client'

import { useState } from 'react'
import Image from 'next/image'

import classnames from 'classnames'

import styles from './index.module.css'

export default function ProductImageContainer({ productImages }) {
  const [currentImagePosition, setCurrentImagePosition] = useState(0)

  const handleSelectImage = (imgIndex) => {
    setCurrentImagePosition(imgIndex)
  }

  const decreaseCurrentImagePosition = () => {
    if (currentImagePosition > 0) {
      setCurrentImagePosition((prev) => prev - 1)
    }
  }

  const increaseCurrentImagePosition = () => {
    if (currentImagePosition < productImages.length - 1) {
      setCurrentImagePosition((prev) => prev + 1)
    }
  }

  return (
    <div className={styles.productImagesContainer}>
      <div className="flex flex-row lg:flex-col">
        <button
          className={styles.productImageChangerBtn}
          onClick={decreaseCurrentImagePosition}
        >
          <i className="bx bx-chevron-up"></i>
        </button>
        {productImages.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleSelectImage(index)}
            className={`relative my-4 h-10 w-10 cursor-pointer overflow-hidden rounded-md sm:h-14 sm:w-14 ${classnames(
              {
                'border-2 border-[#00B207]': currentImagePosition === index,
              },
            )}`}
          >
            <Image
              fill
              src={item.img}
              alt="Product Image"
              className="object-cover"
            />
          </div>
        ))}
        <button
          className={styles.productImageChangerBtn}
          onClick={increaseCurrentImagePosition}
        >
          <i className="bx bx-chevron-down"></i>
        </button>
      </div>
      <div className="relative h-[200px] w-[200px] xsm:h-[300px] xsm:w-[300px]">
        <Image
          fill
          src={productImages[currentImagePosition].img}
          alt="Product Image"
          className="object-cover"
        />
      </div>
    </div>
  )
}
