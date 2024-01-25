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
          <i className="bx bx-chevron-up hidden lg:inline-block"></i>
          <i className="bx bx-chevron-left lg:hidden"></i>
        </button>
        {productImages.map((item, index) => (
          <div
            key={item.id}
            onClick={() => handleSelectImage(index)}
            className={`relative mx-4 my-0 h-10 w-10 cursor-pointer overflow-hidden rounded-md sm:h-14 sm:w-14 lg:mx-0 lg:my-4 ${classnames(
              {
                'border-2 border-[#00B207]': currentImagePosition === index,
              },
            )}`}
          >
            <Image
              fill
              src={item.url.secure_url}
              alt="Product Image"
              className="object-cover"
            />
          </div>
        ))}
        <button
          className={styles.productImageChangerBtn}
          onClick={increaseCurrentImagePosition}
        >
          <i className="bx bx-chevron-down hidden lg:inline-block"></i>
          <i className="bx bx-chevron-right lg:hidden"></i>
        </button>
      </div>
      <div className="relative h-[200px] w-[200px] xsm:h-[300px] xsm:w-[300px]">
        <Image
          fill
          src={productImages[currentImagePosition].url.secure_url}
          alt="Product Image"
          className="object-cover"
        />
      </div>
    </div>
  )
}
