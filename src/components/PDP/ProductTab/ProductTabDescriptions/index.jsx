import Image from 'next/image'

import styles from './index.module.css'
import Video from '../video'

const data = [
  { id: 1, title: '100 g of fresh leaves provides.' },
  { id: 2, title: 'Aliquam ac est at augue volutpat elementum.' },
  { id: 3, title: 'Quisque nec enim eget sapien molestie.' },
  { id: 4, title: 'Proin convallis odio volutpat finibus posuere.' },
]

export default function ProductTabDescription() {
  return (
    <div className={styles.productTabDescriptionContainer}>
      <div className="flex-grow">
        <p className={styles.productTabDescriptionText}>
          Sed commodo aliquam dui ac porta. Fusce ipsum felis, imperdiet at
          posuere ac, viverra at mauris. Maecenas tincidunt ligula a sem
          vestibulum pharetra. Maecenas auctor tortor lacus, nec laoreet nisi
          porttitor vel. Etiam tincidunt metus vel dui interdum sollicitudin.
          Mauris sem ante, vestibulum nec orci vitae, aliquam mollis lacus. Sed
          et condimentum arcu, id molestie tellus. Nulla facilisi. Nam
          scelerisque vitae justo a convallis. Morbi urna ipsum, placerat quis
          commodo quis, egestas elementum leo. Donec convallis mollis enim.
          Aliquam id mi quam. Phasellus nec fringilla elit.
        </p>
        <p className={`${styles.productTabDescriptionText} mt-4`}>
          Nulla mauris tellus, feugiat quis pharetra sed, gravida ac dui. Sed
          iaculis, metus faucibus elementum tincidunt, turpis mi viverra velit,
          pellentesque tristique neque mi eget nulla. Proin luctus elementum
          neque et pharetra.
        </p>
        <div>
          <div className="my-4">
            {data.map((item, index) => (
              <div key={item.id} className="my-2 flex items-center gap-2">
                <div className="relative h-4 w-4 overflow-hidden rounded-full">
                  <Image src="/assets/images/accept.png" alt="Accept" fill />
                </div>
                <p className={styles.productTabDescriptionText}>{item.title}</p>
              </div>
            ))}
          </div>
          <p className={styles.productTabDescriptionText}>
            Cras et diam maximus, accumsan sapien et, sollicitudin velit. Nulla
            blandit eros non turpis lobortis iaculis at ut massa.
          </p>
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-4">
        <Video />
      </div>
    </div>
  )
}
