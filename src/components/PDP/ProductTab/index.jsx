'use client'

import { useState } from 'react'
import classnames from 'classnames'

import styles from './index.module.css'
import ProductTabDescription from './ProductTabDescriptions'
import AdditionalInformation from './AdditionalInformation'
import CustomerReview from './CutomerFeedback'

const tabs = [
  { id: 1, title: 'Descriptions' },
  { id: 2, title: 'Additional Information' },
  { id: 3, title: 'Customer Feedback' },
]

export default function ProductTab() {
  const [currentTab, setCurrentTab] = useState(1)

  const handleTab = (tabId) => {
    setCurrentTab(tabId)
  }

  return (
    <div>
      <div className={styles.tabButtonContainer}>
        {tabs.map((tab, index) => (
          <button
            key={tab.id}
            className={`${styles.tabBtn} ${classnames({
              'text-[#1A1A1A] after:block': currentTab === tab.id,
              'text-[#808080] after:hidden': currentTab !== tab.id,
            })}`}
            onClick={() => handleTab(tab.id)}
          >
            {tab.title}
          </button>
        ))}
      </div>
      <div className={styles.tabContentContainer}>
        {currentTab === 1 && <ProductTabDescription />}
        {currentTab === 2 && <AdditionalInformation />}
        {currentTab === 3 && <CustomerReview />}
      </div>
    </div>
  )
}
