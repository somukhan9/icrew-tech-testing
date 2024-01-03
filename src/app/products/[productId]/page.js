import { Poppins } from 'next/font/google'

import styles from './page.module.css'

import ProductImageContainer from '@/components/PDP/ProductImageContainer'
import ProductDescriptionContainer from '@/components/PDP/ProductDescriptionContainer'
import ProductTab from '@/components/PDP/ProductTab'
import RelatedProducts from '@/components/PDP/RelatedProducts'
import BreadCrumb from '@/components/BreadCrumb'

const productImages = [
  {
    id: 1,
    img: '/assets/images/PDP/p1.png',
  },
  {
    id: 2,
    img: '/assets/images/PDP/p2.png',
  },
  {
    id: 3,
    img: '/assets/images/PDP/p3.png',
  },
  {
    id: 4,
    img: '/assets/images/PDP/p4.png',
  },
]

const productTags = [
  'Vegetables',
  'Healthy',
  'Chinese Cabbage',
  'Green Cabbage',
]

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
})

export default function PDP() {
  return (
    <>
      <BreadCrumb />
      <section className={`${styles.pdpContainer} ${poppins.className}`}>
        <div className={styles.productDetailsContainer}>
          {/* Product Image Container */}
          <ProductImageContainer productImages={productImages} />

          {/* Product Description Container */}
          <ProductDescriptionContainer productTags={productTags} />
        </div>

        {/* Product Content */}
        <div className={styles.productContentContainer}>
          {/* Product Tab */}
          <ProductTab />
        </div>
        <div className={styles.relatedProductsContainer}>
          <RelatedProducts />
        </div>
      </section>
    </>
  )
}
