import Image from 'next/image'
import veg from 'public/veg.png'
import fish from 'public/fish.png'
import fruits from 'public/fruits.jpg'

export default function TopCategory() {
  return (
    <div className="mt-20 flex w-full flex-col items-center justify-between">
      <p className="mb-8 text-3xl font-semibold text-slate-800">Top Category</p>
      <div className="grid h-[90%] w-[90%] grid-cols-2 gap-3 sm:h-[70%] sm:grid-cols-3 md:grid-cols-6">
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Vegetables</p>
          <p className="mb-2 text-xs text-gray-500">165 Products</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={fruits}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Fresh Fruits</p>
          <p className="mb-2 text-xs text-gray-500">137 Products</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={fish}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">River Fish</p>
          <p className="mb-2 text-xs text-gray-500">34 Products</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Meat</p>
          <p className="mb-2 text-xs text-gray-500">165 Products</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Water & Drinks</p>
          <p className="mb-2 text-xs text-gray-500">48 Products</p>
        </div>
        <div className="col-span-1 flex flex-col items-center justify-center rounded-md border border-gray-200 shadow-sm hover:border-blue-400 hover:text-blue-600">
          <div className="relative m-auto h-[120px] w-[120px]">
            <Image
              src={veg}
              fill
              alt="Category items"
              className="object-cover"
            />
          </div>
          <p className="text-base font-semibold">Snacks</p>
          <p className="mb-2 text-xs text-gray-500">180 Products</p>
        </div>
      </div>
    </div>
  )
}
