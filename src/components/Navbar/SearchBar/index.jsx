import { useEffect, useRef, useState } from 'react'

import classnames from 'classnames'

import { useRecentSearchService } from '@/services/RecentSearch/recentSearch'

import styles from './index.module.css'
import RecentSearch from './RecentSearch'
import { useRouter } from 'next/navigation'

export default function SearchBar({ isOpenSearchBar, closeSearchBar }) {
  const { addToRecentSearch } = useRecentSearchService()
  const searchInputRef = useRef()
  const recentSearchRef = useRef()
  const router = useRouter()
  const [searchQuery, setSearchQuery] = useState('')
  const [isOpenRecentSearch, setIsOpenRecentSearch] = useState(false)

  const handleSearch = async () => {
    if (!searchQuery) {
      return
    }
    const searchParams = new URLSearchParams(window.location.search)
    searchParams.set('search', searchQuery)
    router.push(`/products/?${searchParams.toString()}`, { scroll: false })
    addToRecentSearch(searchQuery)
    setSearchQuery('')
  }

  useEffect(() => {
    const handleShowRecentSearch = (event) => {
      if (
        searchInputRef.current &&
        !searchInputRef.current.contains(event.target) &&
        recentSearchRef.current &&
        !recentSearchRef.current.contains(event.target)
      ) {
        setIsOpenRecentSearch(false)
      }
    }

    document.addEventListener('click', handleShowRecentSearch)

    return () => {
      document.removeEventListener('click', handleShowRecentSearch)
    }
  }, [])

  return (
    <div
      className={`absolute left-0 right-0 z-50 bg-slate-400 p-4 transition-all duration-200 ease-in-out md:static md:bg-transparent md:p-0 ${classnames(
        {
          'top-0': isOpenSearchBar,
          'top-[-100%]': !isOpenSearchBar,
        },
      )}`}
    >
      <div className="relative flex items-center gap-2 md:gap-2">
        <button
          className="p-2 text-2xl text-slate-300 hover:text-slate-100 md:hidden"
          onClick={closeSearchBar}
        >
          <i className="bx bx-left-arrow-alt mt-1"></i>
        </button>

        <div className={styles.searchBarContainer}>
          <input
            ref={searchInputRef}
            type="text"
            placeholder="Search"
            onFocus={() => setIsOpenRecentSearch(true)}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={styles.searchBarTextInput}
          />
          <button className={`${styles.searchBtn}`} onClick={handleSearch}>
            <span className="hidden md:block">Search</span>
            <i className="bx bx-search-alt-2 mt-1 md:hidden"></i>
          </button>

          {/* Recent Search Component */}
          <RecentSearch
            isOpenRecentSearch={isOpenRecentSearch}
            recentSearchRef={recentSearchRef}
          />
        </div>
      </div>
    </div>
  )
}
