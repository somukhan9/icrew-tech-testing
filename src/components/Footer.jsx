import Image from 'next/image'
import logo from 'public/logo.png'
import 'boxicons/css/boxicons.min.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className="bottom-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 w-full sm:p-5 p-5 text-gray-300">
      <div className="grid grid-cols-3 sm:gap-5 gap-10 h-[90%]">
        <div className="col-span-1 sm:mt-5">
          <Link href="/">
            <Image
              src={logo}
              alt="Website Logo"
              className="h-[60px] w-[60px] sm:ml-24 ml-1 cursor-pointer rounded-[50%] aspect-square"
            />
          </Link>
          <br />
          <p className="sm:ml-[90px] sm:mt-[-10px] ml-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            elementum quam at enim bibendum eleifend.{' '}
          </p>
          <p className="sm:ml-[88px] sm:mt-5 mt-10 mb-5 flex justify-between items-center sm:w-[80%] w-[100%] font-semibold">
            (219) 555-0114 or proxy@gmail.com
          </p>
        </div>
        <div className="col-span-2 sm:mt-10 pt-20 sm:pt-0">
          <div className="grid sm:grid-cols-4 grid-cols-3">
            <div className="col-span-1 sm:flex hidden"></div>
            <div className="col-span-1">
              <Link href="/about">
                <p className="text-base mb-3 text-white font-semibold">
                  My Account
                </p>
              </Link>
              <Link href="/about">
                <p className="text-base mb-1">My Account</p>
              </Link>
              <Link href="/portfolio">
                <p className="text-base mb-1">Order History</p>
              </Link>
              <Link href="/services">
                <p className="text-base mb-1">Shopping Cart</p>
              </Link>
              <Link href="/services">
                <p className="text-base mb-1">Wishlist</p>
              </Link>
            </div>
            <div className="col-span-1 mt-[25px] sm:mt-0">
              <Link href="/blog">
                <p className="text-base mb-3 text-white font-semibold">Helps</p>
              </Link>
              <Link href="/contact">
                <p className="text-base mb-1">FAQ</p>
              </Link>
              <Link href="/faq">
                <p className="text-base mb-1">Retuen Policy</p>
              </Link>
              <Link href="/faq">
                <p className="text-base mb-1">Terms & Conditions</p>
              </Link>
              <Link href="/faq">
                <p className="text-base mb-1">Privacy Policy</p>
              </Link>
            </div>
            <div className="col-span-1 mt-[25px] sm:mt-0">
              <Link href="/blog">
                <p className="text-base mb-3 text-white font-semibold">Proxy</p>
              </Link>
              <Link href="/faq">
                <p className="text-base mb-1">About</p>
              </Link>
              <Link href="/contact">
                <p className="text-base mb-1">Contact</p>
              </Link>
              <Link href="/contact">
                <p className="text-base mb-1">Track Order</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-0 bg-gray-100 h-[1px] w-[90%] m-auto" />
      <p className="sm:mt-3 text-center mt-14">
        All Rights Reserved by iCrew Technologies
      </p>
    </div>
  )
}
