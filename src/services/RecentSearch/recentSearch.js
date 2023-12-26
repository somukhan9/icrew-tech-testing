import { useRecentSearchStore } from '@/store/recentSearch'

export const useRecentSearchService = () => {
  const recentSearchStore = useRecentSearchStore()

  const addToRecentSearch = (searchQuery) => {
    if (recentSearchStore.recentSearches.length >= 10) {
      recentSearchStore.recentSearches.pop()
      recentSearchStore.recentSearches.unshift(searchQuery)
      recentSearchStore.addToRecentSearch(recentSearchStore.recentSearches)
    } else {
      recentSearchStore.recentSearches.unshift(searchQuery)
      recentSearchStore.addToRecentSearch(recentSearchStore.recentSearches)
    }
  }

  const removeFromRecentSearch = (searchQuery) => {
    const filteredRecentSearches = recentSearchStore.recentSearches.filter(
      (item) => item !== searchQuery,
    )
    recentSearchStore.addToRecentSearch(filteredRecentSearches)
  }

  return { addToRecentSearch, removeFromRecentSearch }
}
