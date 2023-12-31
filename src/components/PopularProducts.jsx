import Image from 'next/image'
import veg from 'public/veg.png'
import fish from 'public/fish.png'
import fruits from 'public/fruits.jpg'

export default function PopularProducts() {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-evenly">
      <div className="mb-8 flex w-[90%] justify-between">
        <p className="text-3xl font-semibold text-slate-800">
          Popular Products
        </p>
        <div className="flex w-[100px] cursor-pointer items-center font-semibold text-blue-600">
          <p>View All</p>
          <i className="bx bx-right-arrow-alt bx-sm"></i>
        </div>
      </div>
      <div className="grid h-[80%] w-[90%] grid-cols-2 shadow sm:grid-cols-3 md:grid-cols-5">
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px] bg-white">
            <Image
              src={fruits}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={fish}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-r border-t border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Banana
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 80</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 120
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Green Apple
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 350</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 400
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
        <div className="group col-span-1 flex flex-col justify-center border-b border-l border-r border-gray-200 hover:border hover:border-green-600 hover:shadow-lg">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="mb-[-10px] ml-[22px] text-sm font-semibold text-gray-600 group-hover:text-green-600">
            Potato
          </p>
          <div className="m-auto mb-1 mt-1 flex w-[90%] items-center justify-between">
            <div className="flex w-[60%] justify-evenly">
              <p className="text-base font-semibold">৳ 50</p>
              <p className="text-base font-semibold text-gray-500 line-through">
                ৳ 100
              </p>
            </div>
            <i className="bx bx-shopping-bag bx-sm cursor-pointer rounded-full bg-gray-300 p-2 group-hover:bg-blue-600 group-hover:text-white"></i>
          </div>
        </div>
      </div>
    </div>
  )
}
