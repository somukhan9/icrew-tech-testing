import Image from 'next/image'

import styles from './index.module.css'
import Video from '../video'

const data = [
  { id: 1, name: 'Weight', value: ['03'] },
  { id: 2, name: 'Color', value: ['Green'] },
  { id: 3, name: 'Category', value: ['Vegetables'] },
  { id: 4, name: 'Stock Status', value: ['Available (5,413)'] },
  {
    id: 5,
    name: 'Tags',
    value: ['Vegetables', 'Healthy', 'Chinese', 'Cabbage', 'Green', 'Cabbage'],
  },
]

export default function AdditionalInformation() {
  return (
    <div className={styles.productTabAdditionalInformationContainer}>
      <div className="flex-grow">
        {data.map((item, index) => (
          <div key={item.id} className="my-2 flex flex-row gap-4">
            <p className="text-sm text-[#1A1A1A]">{item.name}:</p>
            {/* <div className="flex-grow" /> */}
            <div className="flex flex-wrap items-center gap-2">
              {item.value.map((valueItem, index) => (
                <p key={index} className="text-sm text-[#666666]">
                  {valueItem}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-1 flex-col gap-4">
        {/* Video */}
        <Video />
      </div>
    </div>
  )
}
