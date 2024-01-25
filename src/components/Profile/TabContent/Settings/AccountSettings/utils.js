import { z } from 'zod'

export const UpdateProfileSchema = z
  .object({
    firstName: z.string().min(1, 'Please enter first name'),
    lastName: z.string().min(1, 'Please enter last name'),
    email: z.string().email(),
    phoneNumber: z
      .string()
      .min(11, 'Phone number must be of 11 digits')
      .max(11, 'Phone number must be of 11 digits'),
  })
  .refine((data) => {}, {})

export const formatPhoneNumber = (input) => {
  // Remove non-numeric characters from the input
  const numericInput = input.replace(/\D/g, '')

  return numericInput

  // Apply the desired Bangladeshi phone number format
  // if (numericInput.length <= 4) {
  //   return `+880${numericInput}`
  // } else if (numericInput.length <= 11) {
  //   return `+880${numericInput.slice(0, 4)}-${numericInput.slice(4)}`
  // } else {
  //   // If the input is longer than 11 digits, truncate it
  //   return `+880${numericInput.slice(0, 11)}`
  // }
}
