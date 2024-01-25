'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import classnames from 'classnames'

import styles from './index.module.css'
import Dashboard from './Dashboard'
import OrderHistory from './OrderHistory'
import Wishlist from './Wishlist'
import Settings from './Settings'

export default function ProfilePageTabContent({
  orderId,
  showOrderDetails,
  openShowOrderDetails,
  closeShowOrderDetails,
}) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const tab = parseInt(searchParams.get('tab'))

  if (typeof window !== 'undefined') {
    if (![1, 2, 3, 4, 5, 6].includes(parseInt(tab))) {
      const searchParams = new URLSearchParams(window.location.search)
      searchParams.set('tab', 1)
      router.replace(`?${searchParams.toString()}`)
    }
  }

  return (
    <div className="col-span-3">
      {/* Dashboard */}
      <div
        className={`${classnames({
          'hidden ': tab !== 1,
          'block ': tab === 1,
        })}`}
      >
        <Dashboard
          showOrderDetails={showOrderDetails}
          openShowOrderDetails={openShowOrderDetails}
          closeShowOrderDetails={closeShowOrderDetails}
          orderId={orderId}
        />
      </div>

      {/* Order History */}
      <div
        className={`${classnames({
          hidden: tab !== 2,
          block: tab === 2,
        })}`}
      >
        <OrderHistory
          showOrderDetails={showOrderDetails}
          openShowOrderDetails={openShowOrderDetails}
          closeShowOrderDetails={closeShowOrderDetails}
          orderId={orderId}
        />
      </div>

      {/* WhishList */}
      <div
        className={`${classnames({
          hidden: tab !== 3,
          block: tab === 3,
        })}`}
      >
        <Wishlist />
      </div>

      {/* Shopping Cart */}
      <div
        className={`${classnames({
          hidden: tab !== 4,
          block: tab === 4,
        })}`}
      >
        Shopping Cart
      </div>

      {/* Settings */}
      <div
        className={`${classnames({
          hidden: tab !== 5,
          block: tab === 5,
        })}`}
      >
        <Settings />
      </div>

      {/* Logout */}
      <div
        className={`${classnames({
          hidden: tab !== 6,
          block: tab === 6,
        })}`}
      >
        Logout
      </div>
    </div>
  )
}
