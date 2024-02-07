'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { SignUpSchema, SignInSchema } from './utils'

import styles from './index.module.css'
import { useEffect, useState } from 'react'
import { useZoneStore } from '@/store/zone'
import { useAuthService } from '@/services/Auth/authService'
import Spinner from '@/components/Spinner'
import OTP from '../OTP'

export default function AuthenticationForm({
  isSignIn,
  setIsSignIn,
  showOtp,
  setShowOtp,
}) {
  const [isClient, setIsClient] = useState(false)
  // const [isOTPSubmissionSuccessful, setIsOTPSubmissionSuccessful] =
  //   useState(false)

  const [accessToken, setAccessToken] = useState('')

  const zones = useZoneStore((state) => state.zones)
  const collectZones = useZoneStore((state) => state.collectZones)
  // const signIn = useAuthStore((state) => state.signIn)
  const { signIn } = useAuthService()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: isSignIn ? zodResolver(SignInSchema) : zodResolver(SignUpSchema),
  })

  const handleOTPSubmit = (otp) => {
    console.log(`${otp} submitted OTP!`)

    // setShowOtp(false)

    // If OTP is verified then log in the user
    if (isSignIn) {
      signIn(accessToken)
      toast.success('Successfully Logged In!')
    } else {
      setIsSignIn(true)
      toast.success('Registration Successful!')
    }
    setShowOtp(false)
  }

  const onSubmit = async (formData) => {
    try {
      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          },
        )

        const data = await response.json()

        if (data.success) {
          const { accessToken } = data.data
          setAccessToken(accessToken)

          reset()
          setShowOtp(true)
        } else {
          toast.error('Invalid Credentials!')
        }
      } else {
        const { password, password2, ...rest } = formData

        const body = {
          user: { password },
          buyer: { ...rest },
        }

        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/users/create-buyer`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          },
        )

        const data = await response.json()

        if (data.success) {
          reset()
          setShowOtp(true)
          toast.success('An OTP has been sent to your phone number!')
        } else {
          const errorMessage = data.errorMessages
            .map((error) => [error.message])
            .join(', ')
          toast.error(errorMessage)
        }
      }
    } catch (error) {
      // console.error(error)
      toast.error('Internal Server Error! Please Try Again.')
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/zones`,
        )
        const { data } = await response.json()
        // console.log(data)
        collectZones(data)
      } catch (error) {
        console.error(error)
      }
    })()
    setIsClient(true)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (showOtp) {
    return <OTP otpLength={4} handleOTPSubmit={handleOTPSubmit} />
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={styles.authenticationForm}
    >
      {isSignIn ? (
        <>
          {/* Username OR Email */}
          <div className={styles.formGroup}>
            <label htmlFor="usernameOrEmail">Username / Email</label>
            <div className="flex flex-col">
              <input
                type="text"
                id="usernameOrEmail"
                {...register('usernameOrEmail')}
                className={styles.formControl}
                // onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Enter username or email"
              />
              {errors['usernameOrEmail'] && (
                <p className="text-xs text-red-700">
                  {errors['usernameOrEmail'].message}
                </p>
              )}
            </div>
          </div>
        </>
      ) : (
        <>
          {/* Username */}
          <div className={styles.formGroup}>
            <label htmlFor="username">Username</label>
            <div className="flex flex-col">
              <input
                type="text"
                id="username"
                {...register('username')}
                className={styles.formControl}
                // onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Enter username"
              />
              {errors['username'] && (
                <p className="text-xs text-red-700">
                  {errors['username'].message}
                </p>
              )}
            </div>
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <div className="flex flex-col">
              <input
                type="email"
                id="email"
                {...register('email')}
                className={styles.formControl}
                // onChange={(e) => setUsernameOrEmail(e.target.value)}
                placeholder="Enter email address"
              />
              {errors['email'] && (
                <p className="text-xs text-red-700">
                  {errors['email'].message}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Password */}
      <div className={styles.formGroup}>
        <label htmlFor="password">Password</label>
        <div className="flex flex-col">
          <input
            type="password"
            id="password"
            {...register('password')}
            className={styles.formControl}
            // onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
          />
          {errors['password'] && (
            <p className="text-xs text-red-700">{errors['password'].message}</p>
          )}
        </div>
      </div>

      {!isSignIn && (
        <>
          {/* Confirm Password */}
          <div className={styles.formGroup}>
            <label htmlFor="password2">Retype Password</label>
            <div className="flex flex-col">
              <input
                type="password"
                id="password2"
                {...register('password2')}
                className={styles.formControl}
                placeholder="Confirm Password"
              />
              {errors['password2'] && (
                <p className="text-xs text-red-700">
                  {errors['password2'].message}
                </p>
              )}
            </div>
          </div>

          {/* Zone */}
          <div className={styles.formGroup}>
            <label htmlFor="zoneId" className="flex-grow">
              Zone
            </label>
            {isClient ? (
              <select
                id="zoneId"
                {...register('zoneId')}
                className={`${styles.formControl} capitalize`}
              >
                {zones.map((zone, index) => (
                  <option key={index} value={zone.id}>
                    {zone.title}
                  </option>
                ))}
              </select>
            ) : (
              <Spinner />
            )}
          </div>

          {/* Address */}
          <div className={styles.formGroup}>
            <label htmlFor="address">Address</label>
            <div className="flex flex-col">
              <input
                type="text"
                id="address"
                {...register('address')}
                className={styles.formControl}
                placeholder="e.g. Chand Ga Abashik"
              />
              {errors['address'] && (
                <p className="text-xs text-red-700">
                  {errors['address'].message}
                </p>
              )}
            </div>
          </div>

          {/* Phone Number */}
          <div className={styles.formGroup}>
            <label htmlFor="mobileNumber">Phone Number</label>
            <div className="flex flex-col">
              <input
                type="number"
                {...register('mobileNumber')}
                id="mobileNumber"
                className={styles.formControl}
                placeholder="e.g. 01xxxxxxxxx"
              />
              {errors['mobileNumber'] && (
                <p className="text-xs text-red-700">
                  {errors['mobileNumber'].message}
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {/* Submit Button */}
      <button
        disabled={isSubmitting}
        type="submit"
        className={styles.submitBtn}
      >
        {isSignIn ? 'Sign In' : 'Sign Up'}
      </button>
    </form>
  )
}
