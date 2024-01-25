import ActiveFilters from '@/components/Filters/ActiveFilters'
import Filters from '@/components/Filters/PLPFilters'
import Slider from '@/components/SlidingBanner/Slider'
import Pagination from '@/components/Pagination'
import BreadCrumb from '@/components/BreadCrumb'

const filterProducts = async (filterOptions) => {
  'use server'
  // Make get request
  const resp = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/products`, {
    cache: 'no-store',
  })
  const { data } = await resp.json()
  // console.log(data)
  return data
}

export default async function ProductList({ searchParams }) {
  // Set default values inside single quote
  const products = await filterProducts({
    category: searchParams.category || '',
    price: searchParams.price || '',
    rating: searchParams.rating || '',
    sorting: searchParams.sorting || '',
  })

  // this products variable should passed to the Product component as props

  return (
    <>
      <BreadCrumb />
      <div className="z-0">
        <Slider />
        <Filters />
        <hr />
        <ActiveFilters />
        <hr />
        <Pagination products={products} />
      </div>
    </>
  )
}
