'use client'

import { useState } from 'react'
import DropDown from './FilterDropdown'
import { useSearchParams } from 'next/navigation'

export default function Filters() {
  const [catToggle, setCatToggle] = useState(1)
  const [priceToggle, setPriceToggle] = useState(1)
  const [ratingToggle, setRatingToggle] = useState(1)
  const [sortByToggle, setSortByToggle] = useState(1)
  const [showedProductsToggle, setShowedProductsToggle] = useState(1)

  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const price = searchParams.get('price') || ''
  const rating = searchParams.get('rating') || ''
  const sorting = searchParams.get('sorting') || 'Latest'
  const productNumber = searchParams.get('productNumber') || 16

  const categories = [
    'Vegetables',
    'Fresh Fruits',
    'Fish',
    'Meat',
    'Water & Drinks',
    'Snacks',
  ]

  const prices = ['Default', 'Low to High', 'High to Low']
  const ratings = ['5 out of 5', '4+', '3+', '2+', '1']
  const sorts = ['Default', 'Latest', 'Oldest']
  const numberOfProducts = ['16', '20', '32']

  return (
    <div className="mx-auto my-5 flex w-[90%] flex-wrap justify-between">
      <div className="flex flex-wrap">
        <div className="relative mb-4 sm:mb-0">
          <button
            onClick={() => setCatToggle(!catToggle)}
            className="mr-5 flex w-[180px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>{!category ? 'Select Category' : category}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={categories}
            toggle={catToggle}
            width={180}
            queryType="category"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setPriceToggle(!priceToggle)}
            className="mr-5 flex w-[150px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>{!price ? 'Select Price' : price}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={prices}
            toggle={priceToggle}
            width={150}
            queryType="price"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setRatingToggle(!ratingToggle)}
            className="mr-5 flex w-[150px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>{!rating ? 'Select Rating' : rating}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={ratings}
            toggle={ratingToggle}
            width={150}
            queryType="rating"
          />
        </div>
      </div>
      <div className="mt-4 flex sm:mt-0">
        <div className="relative">
          <button
            onClick={() => setSortByToggle(!sortByToggle)}
            className="mr-5 flex w-[180px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>Sort by: {sorting}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={sorts}
            toggle={sortByToggle}
            width={180}
            queryType="sorting"
          />
        </div>
        <div className="relative">
          <button
            onClick={() => setShowedProductsToggle(!showedProductsToggle)}
            className="flex w-[150px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>Show: {productNumber}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={numberOfProducts}
            toggle={showedProductsToggle}
            width={150}
            queryType="productNumber"
          />
        </div>
      </div>
    </div>
  )
}
