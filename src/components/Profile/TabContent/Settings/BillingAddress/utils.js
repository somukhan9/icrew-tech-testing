import { z } from 'zod'

export const BillingAddressInfoSchema = z.object({
  firstName: z.string().min(1, 'Please provide first name'),
  lastName: z.string().min(1, 'Please provide last name'),
  companyName: z.string(),
  street: z.string().min(3, 'Please provide street address'),
  country: z.string().min(1, 'Please select a country'),
  state: z.string().min(1, 'Please select a state'),
  zipCode: z.string().min(3, 'Please Provide a valid zip code'),
  email: z.string().email(),
  phoneNumber: z
    .string()
    .min(11, 'Phone should be of 11 digits')
    .max(11, 'Phone should be of 11 digits'),
})

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

export const countries = [
  { id: 1, name: 'United States' },
  { id: 2, name: 'Bangladesh' },
  { id: 3, name: 'Pakistan' },
]

export const states = [
  { id: 1, name: 'Washington DC' },
  { id: 2, name: 'New York' },
  { id: 3, name: 'Los Angeles' },
]
