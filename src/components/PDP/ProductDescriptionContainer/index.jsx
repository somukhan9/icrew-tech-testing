import CallToAction from '../CallToAction'
import styles from './index.module.css'

export default function ProductDescriptionContainer({ productTags }) {
  return (
    <div className={styles.productDescriptionContainer}>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <h1 className="text-2xl font-semibold sm:text-4xl">
            Chinese Cabbage
          </h1>
          <p className="w-max rounded-md bg-[#20B52633] p-2 text-sm uppercase text-[#2C742F] sm:text-base">
            in stock
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-0 sm:space-x-4">
          <div className="flex items-center gap-2">
            <div className="flex">
              <i className="bx bxs-star text-lg text-[#FF8A00]"></i>
              <i className="bx bxs-star text-lg text-[#FF8A00]"></i>
              <i className="bx bxs-star text-lg text-[#FF8A00]"></i>
              <i className="bx bxs-star text-lg text-[#FF8A00]"></i>
              <i className="bx bxs-star text-lg text-[#FF8A00]"></i>
            </div>
            <p className="ml-2 text-sm text-[#666666]">4 Review</p>
          </div>

          <p className="hidden h-1 w-1 rounded-full bg-[#B3B3B3] sm:inline-block" />

          <div className="flex items-center gap-2">
            <p className="text-sm font-medium text-[#333333] sm:text-base">
              SKU:
            </p>
            <p className="text-sm text-[#666666] sm:text-base">2,51,594</p>
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <p className="text-sm text-[#B3B3B3] line-through sm:text-xl">
              $48.00
            </p>
            <p className="text-base font-medium text-[#2C742F] sm:text-2xl">
              $17.28
            </p>
          </div>
          <div className="rounded-full bg-[#EA4B481A] px-4 py-2">
            <p className="text-xs font-medium text-[#EA4B48]">64% Off</p>
          </div>
        </div>
      </div>

      {/* Horizontal Line */}
      <div className="h-[2px] w-full bg-[#E6E6E6]" />

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <p className="text-sm sm:text-base">Share item:</p>
          <div className={styles.socialLinksContainer}>
            <i className={`${styles.socialLink} bx bxl-facebook`}></i>
            <i className={`${styles.socialLink} bx bxl-twitter`}></i>
            <i className={`${styles.socialLink} bx bxl-pinterest-alt`}></i>
            <i className={`${styles.socialLink} bx bxl-instagram`}></i>
          </div>
        </div>

        <p className="text-justify text-sm text-[#808080]">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nulla nibh diam, blandit vel consequat nec,
          ultrices et ipsum. Nulla varius magna a consequat pulvinar.{' '}
        </p>
      </div>

      {/* Horizontal Line */}
      <div className="h-[2px] w-full bg-[#E6E6E6]" />

      {/* Call To Action */}
      <CallToAction />

      {/* Horizontal Line */}
      <div className="h-[2px] w-full bg-[#E6E6E6]" />

      {/* Categories and Tags */}
      <div>
        <div className="flex gap-2">
          <p className="text-sm font-medium text-[#1A1A1A]">Category:</p>
          <span className="text-sm text-[#808080]">Vegetables</span>
        </div>
        <div className="mt-4 flex gap-2">
          <p className="text-sm font-medium text-[#1A1A1A]">Tag:</p>
          <div className="flex flex-wrap gap-2">
            {productTags.map((tag, index) => (
              <span key={index} className="text-sm text-[#808080]">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
