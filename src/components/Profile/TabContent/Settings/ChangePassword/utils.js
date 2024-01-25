import { z } from 'zod'

export const ChangePasswordSchema = z
  .object({
    currentPassword: z.string().min(1, 'Please provide current password'),
    newPassword: z
      .string()
      .min(6, 'Password should be at least of 6 characters'),
    confirmNewPassword: z.string().min(1, 'Please confirm new password'),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: 'Passwords did not match',
    path: ['confirmNewPassword'],
  })
