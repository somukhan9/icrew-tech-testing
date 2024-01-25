'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'

import ProfilePageTab from '../Tab'
import ProfilePageTabContent from '../TabContent'

import styles from './index.module.css'

const tabs = [
  { id: 1, title: 'Dashboard', iconClass: 'bx bxs-dashboard' },
  { id: 2, title: 'Order History', iconClass: 'bx bx-sync' },
  { id: 3, title: 'Wishlist', iconClass: 'bx bx-heart' },
  {
    id: 4,
    title: 'Shopping Cart',
    iconClass: 'bx bx-shopping-bag',
  },
  { id: 5, title: 'Settings', iconClass: 'bx bx-cog' },
  { id: 6, title: 'Log-out', iconClass: 'bx bx-log-out' },
]

export default function ProfilePageContainer() {
  const { tab } = useSearchParams()
  const [orderId, setOrderId] = useState('')
  const [showOrderDetails, setShowOrderDetails] = useState(false)

  const openShowOrderDetails = (orderId) => {
    setOrderId(orderId)
    setShowOrderDetails(true)
  }

  const closeShowOrderDetails = () => {
    setOrderId('')
    setShowOrderDetails(false)
  }

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
      <ProfilePageTab
        tabs={tabs}
        closeShowOrderDetails={closeShowOrderDetails}
      />
      <ProfilePageTabContent
        orderId={orderId}
        showOrderDetails={showOrderDetails}
        openShowOrderDetails={openShowOrderDetails}
        closeShowOrderDetails={closeShowOrderDetails}
      />
    </div>
  )
}
