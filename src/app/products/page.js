import ActiveFilters from '@/components/Filters/ActiveFilters'
import Filters from '@/components/Filters/PLPFilters'
import Slider from '@/components/SlidingBanner/Slider'
import Pagination from '@/components/Pagination'
import BreadCrumb from '@/components/BreadCrumb'

const filterProducts = async (filterOptions) => {
  'use server'
  console.log(filterOptions)
  // Make get request
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=${filterOptions.limit}&page=${filterOptions.page}&sortBy=${filterOptions.sortBy}&sortOrder=${filterOptions.sortOrder}`,
    {
      cache: 'force-cache',
    },
  )
  const data = await resp.json()
  // console.log(data)
  return {
    totalPage: Math.ceil(data.meta.total / data.meta.limit),
    products: data.data,
  }
}

const fetchAllCategories = async () => {
  'use server'
  // Make get request
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/categories`,
    {
      cache: 'no-store',
    },
  )
  const { data } = await resp.json()

  return data
}

export default async function ProductList({ searchParams }) {
  // Set default values inside single quote
  const { totalPage, products } = await filterProducts({
    category: searchParams.category || '',
    price: searchParams.price || '',
    rating: searchParams.rating || '',
    sortBy: searchParams.sortBy || '',
    sortOrder: searchParams.sortOrder || '',
    page: parseInt(searchParams.page) || 1,
    limit: parseInt(searchParams.limit) || 1,
  })

  const categories = await fetchAllCategories()

  // console.log(categories)

  // this products variable should passed to the Product component as props

  return (
    <>
      <BreadCrumb />
      <div className="z-0">
        <Slider />
        <Filters categories={categories} />
        <hr />
        <ActiveFilters />
        <hr />
        <Pagination products={products} totalPage={totalPage} />
      </div>
    </>
  )
}
