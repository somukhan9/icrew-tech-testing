import Image from 'next/image'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import ProfileImage from '../../profile.png'

import { UpdateProfileSchema, formatPhoneNumber } from './utils'

export default function AccountSettings() {
  const [profileImage, setProfileImage] = useState(ProfileImage)
  const [profile, setProfile] = useState({
    firstName: 'Dianne',
    lastName: 'Russel',
    email: 'dianne.russel@example.com',
    phoneNumber: '01700000000',
  })

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(UpdateProfileSchema) })

  const handleOnChange = (event) => {
    if (event.target.id === 'phoneNumber') {
      setProfile((prev) => ({
        ...prev,
        [event.target.id]: formatPhoneNumber(event.target.value),
      }))
    } else {
      setProfile((prev) => ({ ...prev, [event.target.id]: event.target.value }))
    }
  }

  const handleChangeProfileImage = (event) => {
    const file = event.target.files[0]
    if (file) {
      const reader = new FileReader()

      reader.onload = (e) => {
        setProfileImage(e.target.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const onSubmit = async (formData) => {
    console.log(formData.phoneNumber)
  }

  return (
    <div className="w-full rounded-md border border-gray-200">
      <h1 className="border-b border-gray-200 p-4 text-xl font-medium text-[#1A1A1A]">
        Account Settings
      </h1>
      <div>
        <form onSubmit={handleSubmit(onSubmit)} className="w-[90%] p-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex w-full max-w-sm flex-col gap-4">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className="text-sm text-[#1A1A1A]">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  {...register('firstName')}
                  value={profile.firstName}
                  onChange={handleOnChange}
                  className="rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
                />
                {errors['firstName'] && (
                  <p className="text-xs text-red-700">
                    {errors['firstName'].message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className="text-sm text-[#1A1A1A]">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  {...register('lastName')}
                  value={profile.lastName}
                  onChange={handleOnChange}
                  className="rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
                />
                {errors['lastName'] && (
                  <p className="text-xs text-red-700">
                    {errors['lastName'].message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm text-[#1A1A1A]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register('email')}
                  value={profile.email}
                  onChange={handleOnChange}
                  className="rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
                />
                {errors['email'] && (
                  <p className="text-xs text-red-700">
                    {errors['email'].message}
                  </p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phoneNumber" className="text-sm text-[#1A1A1A]">
                  Phone Number
                </label>
                <input
                  type="text"
                  id="phoneNumber"
                  name="phoneNumber"
                  min={11}
                  max={11}
                  {...register('phoneNumber')}
                  value={profile.phoneNumber}
                  onChange={handleOnChange}
                  className="rounded-md border border-gray-200 p-2 text-base text-[#666666] outline-none ring-offset-indigo-500 transition-all duration-200 ease-in-out focus:ring-2"
                />
                {errors['phoneNumber'] && (
                  <p className="text-xs text-red-700">
                    {errors['phoneNumber'].message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex w-max flex-col items-center justify-center gap-4">
              <div className="relative h-28 w-28 overflow-hidden rounded-full object-cover">
                <Image src={profileImage} alt="Profile Image" fill />
              </div>
              <div className="  ">
                <label
                  htmlFor="profileImage"
                  className="cursor-pointer rounded-full border-2 border-[#00B207] px-10 py-2 font-semibold text-[#00B207] transition-all  duration-200 ease-in-out hover:bg-[#00B207] hover:text-white"
                >
                  Chose Image
                </label>
                <input
                  type="file"
                  className="hidden"
                  id="profileImage"
                  accept="image/*"
                  hidden
                  onChange={handleChangeProfileImage}
                />
              </div>
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
    </div>
  )
}
