'use client'

import { useRef, useState } from 'react'
import DropDown from './FilterDropdown'
import { useSearchParams } from 'next/navigation'

export default function Filters({ categories }) {
  const [catToggle, setCatToggle] = useState(true)
  const [priceToggle, setPriceToggle] = useState(true)
  const [ratingToggle, setRatingToggle] = useState(true)
  const [sortByToggle, setSortByToggle] = useState(true)
  const [sortOrderToggle, setSortOrderToggle] = useState(true)
  const [showedProductsToggle, setShowedProductsToggle] = useState(1)

  const searchParams = useSearchParams()
  const category = searchParams.get('category') || ''
  const price = searchParams.get('price') || ''
  const rating = searchParams.get('rating') || ''
  const sortByParam = searchParams.get('sortBy') || ''
  const sortOrderParam = searchParams.get('sortOrder') || ''
  const productNumber = searchParams.get('productNumber') || 16

  const categoryForFilters = categories.map((category) => ({
    key: category.title,
    value: category.slug,
  }))

  const prices = [
    { key: 'Default', value: '' },
    { key: 'Low to High', value: 'low-to-high' },
    { key: 'High to Low', value: 'high-to-low' },
  ]
  const ratings = [
    { key: '5 out of 5', value: 5 },
    { key: '4+', value: 4 },
    { key: '3+', value: 3 },
    { key: '2+', value: 2 },
    { key: '1', value: 1 },
  ]
  const sortBy = [
    { key: 'Title', value: 'title' },
    { key: 'Price', value: 'price' },
  ]

  const sortOrder = [
    { key: 'Latest', value: 'desc' },
    { key: 'Oldest', value: 'asc' },
  ]

  const numberOfProducts = [
    { key: 16, value: 16 },
    { key: 20, value: 20 },
    { key: 32, value: 32 },
  ]

  return (
    <div className="mx-auto my-5 flex w-[90%] flex-wrap justify-between gap-4">
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <button
            onClick={() => setCatToggle(!catToggle)}
            className="mr-5 flex w-[180px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>{!category ? 'Select Category' : category}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={categoryForFilters}
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
      <div className="flex flex-wrap gap-4">
        <div className="relative">
          <button
            onClick={() => setSortOrderToggle((prev) => !prev)}
            className="mr-5 flex w-[180px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>Sort order: {sortOrderParam}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={sortOrder}
            toggle={sortOrderToggle}
            width={180}
            queryType="sortOrder"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setSortByToggle(!sortByToggle)}
            className="mr-5 flex w-[150px] items-center justify-between rounded-md border border-gray-300 p-2 text-gray-600"
          >
            <p>Sort by: {sortByParam}</p>
            <i className="bx bx-down-arrow-alt"></i>
          </button>
          <DropDown
            listData={sortBy}
            toggle={sortByToggle}
            width={150}
            queryType="sortBy"
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
            queryType="limit"
          />
        </div>
      </div>
    </div>
  )
}
