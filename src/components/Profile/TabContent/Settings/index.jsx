import ChangePassword from './ChangePassword'
import BillingAddress from './BillingAddress'
import AccountSettings from './AccountSettings'

export default function Settings() {
  return (
    <div className="flex flex-col gap-4">
      {/* Account Settings */}
      <AccountSettings />

      {/* Billing Address Form */}
      <BillingAddress />

      {/* Change Password */}
      <ChangePassword />
    </div>
  )
}
