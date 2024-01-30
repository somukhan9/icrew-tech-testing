import { useEffect, forwardRef } from 'react'
import { useRouter } from 'next/navigation'

export default function DropDown({ listData, toggle, width, queryType }) {
  const router = useRouter()

  return (
    <ul
      style={{ width: width }}
      className={`${
        toggle ? 'hidden' : 'flex'
      } absolute top-12 z-10 cursor-pointer flex-col rounded-lg border border-gray-300 bg-white p-3 text-gray-500 outline-none drop-shadow-sm`}
    >
      {listData.map((item, i) => (
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
      ))}
    </ul>
  )
}
