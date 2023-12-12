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

export default function AuthenticationForm({ isSignIn, setIsSignIn }) {
  const [isClient, setIsClient] = useState(false)
  const [isOtpGenerating, setIsOtpGenerating] = useState(false)
  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')
  const zones = useZoneStore((state) => state.zones)
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

  const generateOTP = async () => {
    setIsOtpGenerating(true)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log('generate OTP')
    } catch (error) {
    } finally {
      setIsOtpGenerating(false)
      console.log(usernameOrEmail, password)
    }
  }

  const onSubmit = async (formData) => {
    try {
      if (isSignIn) {
        console.log(formData)
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
        console.log(data)

        if (data.success) {
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }

        if (response.ok) {
          signIn(data.accessToken)
          reset()
        }
      } else {
        const { password, password2, ...rest } = formData

        const body = {
          user: { password },
          buyer: { ...rest },
        }

        console.log(body)

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
        console.log(data)

        if (data.success) {
          toast.success(data.message)
        } else {
          toast.error(data.message)
        }

        if (response.ok) {
          setIsSignIn(true)
          reset()
        }
      }
    } catch (error) {
      console.error(error)
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
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
                onChange={(e) => setUsernameOrEmail(e.target.value)}
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
            onChange={(e) => e.target.value}
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
            <label htmlFor="zoneId">Zone</label>
            {isClient ? (
              <select
                id="zoneId"
                {...register('zoneId')}
                className={`${styles.formControl} capitalize sm:w-[235px]`}
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

      {/* OTP */}
      <div className={styles.formGroup}>
        <div></div>
        <div className={styles.generateOTPSectionContainer}>
          <button
            onClick={generateOTP}
            disabled={isOtpGenerating}
            className={styles.generateOTPBtn}
          >
            Generate OTP
          </button>
          <div className="flex flex-col">
            <input
              type="number"
              id="otp"
              {...register('otp')}
              placeholder="Enter OTP Here"
              className={styles.formControl}
            />
            {errors['otp'] && (
              <p className="text-xs text-red-700">{errors['otp'].message}</p>
            )}
          </div>
        </div>
      </div>

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
