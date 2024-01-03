import { useState, useEffect } from 'react'
import classnames from 'classnames'

import { useRecentSearchService } from '@/services/RecentSearch/recentSearch'
import { useRecentSearchStore } from '@/store/recentSearch'
import { useRouter } from 'next/navigation'

export default function RecentSearch({ isOpenRecentSearch, recentSearchRef }) {
  const router = useRouter()
  const { recentSearches } = useRecentSearchStore()
  const { removeFromRecentSearch } = useRecentSearchService()
  const [isClient, setIsClient] = useState(false)

  const removeQueryFromRecentSearch = (query) => {
    removeFromRecentSearch(query)
  }

  const makeSearchFromRecentSearch = (item) => {
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('search', item)
    router.push(`/products?${searchParams.toString()}`)
  }

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return <></>
  }

  return (
    <div
      ref={recentSearchRef}
      className={classnames({
        'absolute left-0 top-[110%] z-50 w-full flex-col gap-2 rounded-md bg-slate-600 py-4':
          recentSearches.length > 0,
        'flex ': isOpenRecentSearch,
        'hidden ': !isOpenRecentSearch,
      })}
    >
      {recentSearches.map((item, index) => (
        <div
          key={index}
          className="flex items-center justify-between gap-2 px-4 py-1 text-slate-200 hover:bg-slate-800"
        >
          <button
            className="flex-1 cursor-default text-left text-sm"
            onClick={() => {
              makeSearchFromRecentSearch(item)
            }}
          >
            <span>{item}</span>
          </button>
          <button
            onClick={() => removeQueryFromRecentSearch(item)}
            className="text-sm transition-all duration-200 hover:text-slate-100"
          >
            <span className="hidden hover:underline md:inline-block">
              Remove
            </span>
            <span className="text-xl md:hidden">&times;</span>
          </button>
        </div>
      ))}
    </div>
  )
}
