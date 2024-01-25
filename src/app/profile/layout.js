import BreadCrumb from '@/components/BreadCrumb'

export const metadata = {
  title: 'Pengooin Profile',
  description: 'See Your Account Details',
}

export default function RootLayout({ children }) {
  return (
    <>
      <BreadCrumb />
      {children}
    </>
  )
}
