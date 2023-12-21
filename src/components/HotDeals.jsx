import Image from 'next/image'
import veg from 'public/veg.png'
import fish from 'public/fish.png'
import fruits from 'public/fruits.jpg'

export default function HotDeals() {
  return (
    <div className="flex flex-col justify-evenly w-full items-center mt-20">
      <div className="flex justify-between w-[90%] mb-8">
        <p className="text-3xl font-semibold text-slate-800">Hot Deals</p>
        <div className="flex items-center w-[100px] text-blue-600 font-semibold cursor-pointer">
          <p>View All</p>
          <i className="bx bx-right-arrow-alt bx-sm"></i>
        </div>
      </div>
      <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 w-[90%] h-[80%] shadow">
        <div className="col-span-2 row-span-2 border-gray-200 border-t border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-evenly items-center group">
          <div className="sm:h-[200px] sm:w-[80%] relative">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <div className="flex justify-center items-center rounded-3xl bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer w-[80%]">
            <p>Add to Cart</p>
            <i className="bx bx-shopping-bag bx-sm ml-2" />
          </div>
          <p className="text-base text-gray-600 font-semibold group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-center w-[60%]">
            <p className="text-base font-semibold">৳ 350</p>
            <p className="text-base font-semibold text-gray-500 line-through pl-2">
              ৳ 400
            </p>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-t border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto bg-white">
            <Image
              src={fruits}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-t border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={fish}
              // height={120}
              // width={120}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-t border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-t border-l border-b border-r hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Banana
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 80</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 120
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Green Apple
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-r border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Potato
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 50</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 100
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-r border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Potato
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 50</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 100
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
        <div className="col-span-1 border-gray-200 border-r border-l border-b hover:border-green-600 hover:border hover:shadow-lg flex flex-col justify-center group">
          <div className="relative sm:h-[120px] sm:w-[120px] m-auto">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-sm text-gray-600 font-semibold ml-[22px] mb-[-10px] group-hover:text-green-600">
            Potato
          </p>
          <div className="flex justify-between items-center w-[90%] m-auto mb-1 mt-1">
            <div className="flex justify-evenly w-[60%]">
              <p className="text-base font-semibold">৳ 50</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 100
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm rounded-full bg-gray-300 group-hover:bg-blue-600 group-hover:text-white p-2 cursor-pointer"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
