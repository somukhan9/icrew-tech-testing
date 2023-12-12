import classnames from 'classnames'

import styles from './index.module.css'

export default function SearchBar({ isOpenSearchBar, closeSearchBar }) {
  const handleSearch = async () => {
    console.log('searched')
  }

  return (
    <>
      {/* Desktop Search Bar */}
      <div className={styles.searchBarContainer}>
        <input
          type="text"
          placeholder="Search"
          className={styles.searchBarTextInput}
        />
        <button className={styles.searchBtn}>Search</button>
      </div>

      {/* Mobile Search Bar Container */}
      <div
        className={`${styles.mobileResponsiveSearchBarContainer} ${classnames({
          'top-0': isOpenSearchBar,
          'top-[-100%]': !isOpenSearchBar,
        })}`}
      >
        <button
          className="p-2 text-2xl text-slate-700 hover:text-slate-900"
          onClick={closeSearchBar}
        >
          <i className="bx bx-left-arrow-alt mt-1"></i>
        </button>

        <div className="flex flex-1 items-center overflow-hidden rounded-md border border-blue-600 bg-slate-200 pl-3">
          <input
            type="text"
            placeholder="Search"
            className="h-full w-full flex-1 bg-transparent outline-none"
          />

          <button
            className="bg-blue-600 px-4 py-2 text-xl text-slate-300 transition-all duration-100 ease-in-out hover:text-slate-100"
            onClick={handleSearch}
          >
            <i className="bx bx-search-alt-2 mt-1"></i>
          </button>
        </div>
      </div>
    </>
  )
}
