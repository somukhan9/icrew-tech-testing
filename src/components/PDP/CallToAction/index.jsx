'use client'

import { useState } from 'react'

import styles from './index.module.css'

export default function CallToAction({ product }) {
  const [itemCount, setItemCount] = useState(1)

  const increaseByOne = () => {
    setItemCount((prev) => prev + 1)
  }

  const decreaseByOne = () => {
    if (itemCount > 1) {
      setItemCount((prev) => prev - 1)
    }
  }

  return (
    <div className={styles.callToActionContainer}>
      <div className="flex items-center gap-4">
        <div className="flex w-max gap-2 rounded-full border border-[#E6E6E6] bg-white p-2">
          <button className={styles.ctaAddSubBtn} onClick={decreaseByOne}>
            -
          </button>
          <input
            type="number"
            value={itemCount}
            onChange={(e) =>
              setItemCount(Math.abs(parseInt(e.target.value)) || 1)
            }
            className="w-14 bg-transparent text-center text-xl caret-transparent outline-none"
          />
          <button className={styles.ctaAddSubBtn} onClick={increaseByOne}>
            +
          </button>
        </div>

        <p>{product.unit}</p>
      </div>
      <button className={styles.addToCartBtn}>
        <p>Add to Cart</p> <i className="bx bx-shopping-bag text-xl"></i>
      </button>
    </div>
  )
}
