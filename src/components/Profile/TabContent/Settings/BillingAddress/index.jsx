import { useState } from 'react'
import { useForm } from 'react-hook-form'

import {
  BillingAddressInfoSchema,
  countries,
  formatPhoneNumber,
  states,
} from './utils'
import { zodResolver } from '@hookform/resolvers/zod'

export default function BillingAddress() {
  const [billingInfo, setBillingInfo] = useState({
    firstName: 'Dianne',
    lastName: 'Russel',
    companyName: 'iCrew Technologies',
    street: '4140 Parl',
    country: countries[0].id,
    // country: {
    //   id: countries[0].id,
    //   name: countries[0].name,
    // },
    state: states[0].id,
    // state: {
    //   id: states[0].id,
    //   name: states[0].name,
    // },
    zipCode: '20033',
    email: 'dianne.russel@gmail.com',
    phoneNumber: '01700000000',
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(BillingAddressInfoSchema) })

  const handleOnChange = (e) => {
    if (e.target.id === 'phoneNumber') {
      setBillingInfo((prev) => ({
        ...prev,
        [e.target.id]: formatPhoneNumber(e.target.value),
      }))
    } else {
      setBillingInfo((prev) => ({
        ...prev,
        [e.target.id]: e.target.value,
      }))
    }
  }

  const onSubmit = (formData) => {
    console.log(formData)
  }

  return (
    <div className="w-full rounded-md border border-gray-200">
      <h1 className="border-b border-gray-200 p-4 text-xl font-medium text-[#1A1A1A]">
        Billing Address
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4"
      >
        <div className="flex flex-wrap items-start gap-4 lg:flex-nowrap">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="firstName" className="text-sm text-[#1A1A1A]">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              {...register('firstName')}
              value={billingInfo.firstName}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['firstName'] && (
              <p className="text-xs text-red-700">
                {errors['firstName'].message}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="lastName" className="text-sm text-[#1A1A1A]">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              {...register('lastName')}
              value={billingInfo.lastName}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['lastName'] && (
              <p className="text-xs text-red-700">
                {errors['lastName'].message}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="companyName" className="text-sm text-[#1A1A1A]">
              Company Name (Optional)
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              {...register('companyName')}
              value={billingInfo.companyName && billingInfo.companyName}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['companyName'] && (
              <p className="text-xs text-red-700">
                {errors['companyName'].message}
              </p>
            )}
          </div>
        </div>

        {/* Street Address */}
        <div className="flex w-full flex-col gap-2">
          <label htmlFor="street" className="text-sm text-[#1A1A1A]">
            Street
          </label>
          <input
            type="text"
            id="street"
            name="street"
            value={billingInfo.street}
            {...register('street')}
            onChange={handleOnChange}
            className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
          />
          {errors['street'] && (
            <p className="text-xs text-red-700">{errors['street'].message}</p>
          )}
        </div>

        {/* Country Region State ZipCode */}
        <div className="flex flex-wrap items-start gap-4 lg:flex-nowrap">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="country" className="text-sm text-[#1A1A1A]">
              Country / Region
            </label>

            <select
              id="country"
              {...register('country')}
              value={billingInfo.country}
              onChange={handleOnChange}
              // onSelect={(e) => setBillingInfo(prev => ({...prev, [e.target.id]: }))}
              className={`rounded-md border border-gray-200 p-2 text-base capitalize text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2`}
            >
              {countries.map((country, index) => (
                <option key={index} value={country.id}>
                  {country.name}
                </option>
              ))}
            </select>

            {errors['country'] && (
              <p className="text-xs text-red-700">
                {errors['country'].message}
              </p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="state" className="text-sm text-[#1A1A1A]">
              State
            </label>
            <select
              id="state"
              {...register('state')}
              value={billingInfo.state}
              onChange={handleOnChange}
              className={`rounded-md border border-gray-200 p-2 text-base capitalize text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2`}
            >
              {states.map((state, index) => (
                <option key={index} value={state.id}>
                  {state.name}
                </option>
              ))}
            </select>
            {errors['state'] && (
              <p className="text-xs text-red-700">{errors['state'].message}</p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="zipCode" className="text-sm text-[#1A1A1A]">
              Zip Code
            </label>
            <input
              type="text"
              id="zipCode"
              name="zipCode"
              {...register('zipCode')}
              value={billingInfo.zipCode}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['zipCode'] && (
              <p className="text-xs text-red-700">
                {errors['zipCode'].message}
              </p>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-start gap-4 lg:flex-nowrap">
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="email" className="text-sm text-[#1A1A1A]">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              {...register('email')}
              value={billingInfo.email}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['email'] && (
              <p className="text-xs text-red-700">{errors['email'].message}</p>
            )}
          </div>
          <div className="flex w-full flex-col gap-2">
            <label htmlFor="phoneNumber" className="text-sm text-[#1A1A1A]">
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              {...register('phoneNumber')}
              value={billingInfo.phoneNumber}
              onChange={handleOnChange}
              className="w-full rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
            />
            {errors['phoneNumber'] && (
              <p className="text-xs text-red-700">
                {errors['phoneNumber'].message}
              </p>
            )}
          </div>
        </div>

        <button
          type="submit"
          className="my-6 w-max rounded-full border-2 border-[#00B207] bg-[#00B207] px-10 py-2 font-semibold  text-white transition-all duration-200 ease-in-out hover:opacity-90"
        >
          Save Changes
        </button>
      </form>
    </div>
  )
}
