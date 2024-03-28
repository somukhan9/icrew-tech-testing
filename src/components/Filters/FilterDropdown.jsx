import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function DropDown({ listData, toggle, width, queryType }) {
  const router = useRouter()
  const [minPrice, setMinPrice] = useState(1)
  const [maxPrice, setMaxPrice] = useState(100)

  const onPriceFilterSubmission = (event) => {
    event.preventDefault()

    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('minPrice', minPrice)
    searchParams.set('maxPrice', maxPrice)
    router.replace(`?${searchParams.toString()}`, { scroll: false })
  }

  return (
    <ul
      style={{ width: width }}
      className={`${
        toggle ? 'hidden' : 'flex'
      } absolute top-12 z-10 cursor-pointer flex-col rounded-lg border border-gray-300 bg-white p-3 text-gray-500 outline-none drop-shadow-sm`}
    >
      {queryType === 'price' ? (
        <li>
          <form
            onSubmit={onPriceFilterSubmission}
            className="flex flex-col gap-2"
          >
            <div className="grid grid-cols-3 items-center">
              <label htmlFor="minPrice" className="col-span-1">
                Min
              </label>
              <input
                type="number"
                id="minPrice"
                // min={1}
                value={minPrice}
                onChange={(e) =>
                  setMinPrice(
                    parseFloat(e.target.value) > 0
                      ? Math.abs(parseFloat(e.target.value))
                      : 1,
                  )
                }
                placeholder="Min Price"
                className="col-span-2 h-8 w-full rounded-md border border-indigo-600 p-2 outline-none ring-offset-indigo-600 focus:border-none focus:ring-2"
              />
            </div>
            <div className="grid grid-cols-3 items-center">
              <label htmlFor="maxPrice" className="col-span-1">
                Max
              </label>
              <input
                type="number"
                id="maxPrice"
                // min={1}
                value={maxPrice}
                onChange={(e) =>
                  setMaxPrice(
                    parseFloat(e.target.value) > 0
                      ? Math.abs(parseFloat(e.target.value))
                      : 1,
                  )
                }
                placeholder="Max Price"
                className="col-span-2 h-8 w-full rounded-md border border-indigo-600 p-2 outline-none ring-offset-indigo-600 focus:border-none focus:ring-2"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-600 px-4 py-2 text-white transition-all duration-200 ease-in-out hover:opacity-90"
            >
              Submit
            </button>
          </form>
        </li>
      ) : (
        listData.map((item, i) => (
          <li
            key={i}
            onClick={() => {
              const searchParams = new URLSearchParams(window.location.search)
              searchParams.set(queryType, item.value)
              router.replace(`?${searchParams.toString()}`, { scroll: false })
            }}
          >
            {item.key}
          </li>
        ))
      )}
    </ul>
  )
}
