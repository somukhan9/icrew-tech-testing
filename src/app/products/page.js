import ActiveFilters from '@/components/Filters/ActiveFilters'
import Filters from '@/components/Filters/PLPFilters'
import Slider from '@/components/SlidingBanner/Slider'
import Pagination from '@/components/Pagination'
import BreadCrumb from '@/components/BreadCrumb'

const filterProducts = async (filterOptions) => {
  'use server'
  // Make get request
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=${
      filterOptions.limit
    }&page=${filterOptions.page}&sortBy=${filterOptions.sortBy}&sortOrder=${
      filterOptions.sortOrder
    }&${
      filterOptions.category && `categoryId=${filterOptions.category}&`
    }searchTerm=${filterOptions.search}`,

    {
      cache: 'no-store',
    },
  )

  // console.log(
  //   `${process.env.NEXT_PUBLIC_API_BASE_URL}/products?limit=${
  //     filterOptions.limit
  //   }&page=${filterOptions.page}&sortBy=${filterOptions.sortBy}&sortOrder=${
  //     filterOptions.sortOrder
  //   }&${
  //     filterOptions.category && `categoryId=${filterOptions.category}&`
  //   }searchTerm=${filterOptions.search}`,
  // )

  // TODO: Following query should be added to the request URL after the bug is fixed
  // &minPrice=${filterOptions.minPrice}&maxPrice=${filterOptions.maxPrice}

  const data = await resp.json()
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
    search: searchParams.search || '',
    category: searchParams.category || '',
    minPrice: searchParams.minPrice || 1,
    maxPrice: searchParams.maxPrice || 10000000,
    rating: searchParams.rating || '',
    sortBy: searchParams.sortBy || 'title',
    sortOrder: searchParams.sortOrder || 'asc',
    page: parseInt(searchParams.page) || 1,
    limit: parseInt(searchParams.limit) || 8,
  })

  const categories = await fetchAllCategories()

  // this products variable should passed to the Product component as props

  return (
    <>
      <BreadCrumb />
      <div className="z-0">
        <Slider />
        <Filters categories={categories} />
        <hr />
        <ActiveFilters productCount={products.length} />
        <hr />
        <Pagination products={products} totalPage={totalPage} />
      </div>
    </>
  )
}
