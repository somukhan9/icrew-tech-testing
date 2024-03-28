import OrderReceive from '@/components/OrderReceive'
import PrivateRoute from '@/components/PrivateRoute'

const dummyOrder = {
  orderId: '123123',
  orderOwnerName: 'Md. Ibrahim',
  orderNumber: '4324324234',
  orderDate: new Date(Date.now()),
  orderTime: new Date(),
  orderAmount: 100,
  paymentMode: 'Cash On Delivery',
  paymentStatus: 'Paid',
  orderOwnerEmail: 'email@example.com',
  orderOwnerAddress: 'Chandga Abashik, Chittagong',
  orderOwnerPhoneNumber: '01700000000',
}

const fetchOrderDetails = async (orderId) => {
  'use server'
  // write code to fetch order details
  return dummyOrder
}

export default async function OrderReceivePage({ params }) {
  // call fetchOrderDetails function to fetch order
  const { orderId } = params

  const order = await fetchOrderDetails(orderId)

  return (
    <PrivateRoute>
      <section className="bg-purple-700 p-5 text-white md:p-10">
        <div className="mx-auto max-w-[1024px]">
          <OrderReceive order={order} />
        </div>
      </section>
    </PrivateRoute>
  )
}
