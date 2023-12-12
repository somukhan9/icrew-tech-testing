import { z } from 'zod'

export const SignUpSchema = z
  .object({
    username: z.string().min(6),
    email: z.string().email(),
    password: z.string().min(6),
    password2: z.string(),
    zoneId: z.string(),
    address: z.string().min(3, 'Address can not be empty'),
    mobileNumber: z
      .string()
      .min(11, 'Phone number must be of 11 digits')
      .max(11, 'Phone number must be of 11 digits'),

    otp: z.string().min(3, 'OTP can not be empty'),
  })
  .refine((data) => data.password === data.password2, {
    message: 'Passwords did not match',
    path: ['password2'],
  })

export const SignInSchema = z.object({
  usernameOrEmail: z.string().min(1, 'Please enter username or email'),
  password: z.string().min(1, 'Please enter password'),
  otp: z.string().min(3, 'OTP can not be empty'),
})
