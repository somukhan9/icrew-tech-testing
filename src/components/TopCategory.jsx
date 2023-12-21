import Image from 'next/image'
import veg from 'public/veg.png'
import fish from 'public/fish.png'
import fruits from 'public/fruits.jpg'

export default function TopCategory() {
  return (
    <div className="flex justify-between flex-col w-full items-center mt-20">
      <p className="text-3xl font-semibold text-slate-800 mb-8">Top Category</p>
      <div className="grid md:grid-cols-6 sm:grid-cols-3 grid-cols-2 gap-3 w-[90%] sm:h-[70%] h-[90%]">
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Vegetables</p>
          <p className="text-xs text-gray-500 mb-2">165 Products</p>
        </div>
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={fruits}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Fresh Fruits</p>
          <p className="text-xs text-gray-500 mb-2">137 Products</p>
        </div>
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={fish}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">River Fish</p>
          <p className="text-xs text-gray-500 mb-2">34 Products</p>
        </div>
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Meat</p>
          <p className="text-xs text-gray-500 mb-2">165 Products</p>
        </div>
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Water & Drinks</p>
          <p className="text-xs text-gray-500 mb-2">48 Products</p>
        </div>
        <div className="col-span-1 border border-gray-200 hover:border-blue-400 hover:text-blue-600 rounded-md shadow-sm flex flex-col justify-center items-center">
          <div className="sm:h-[120px] sm:w-[120px] m-auto relative">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Snacks</p>
          <p className="text-xs text-gray-500 mb-2">180 Products</p>
        </div>
      </div>
    </div>
  )
}
