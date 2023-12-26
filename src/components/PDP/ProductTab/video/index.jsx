import Image from 'next/image'

export default function Video() {
  return (
    <div>
      <div className="block h-[250px] max-w-[490px] rounded-md">
        <iframe
          src="https://www.youtube.com/embed/vU-iZcxbDUk?si=vyNONJTmbDNt0-5E"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          // className="block h-[141px] w-[250px] rounded-md md:h-[169px] md:w-[300px] lg:h-[314px] lg:w-[490px]"
          className="h-full w-full rounded-md"
        ></iframe>
      </div>
      <div className="my-4 flex w-max flex-col gap-4 rounded-md border px-4 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-8">
            <Image
              src="/assets/images/Vector.png"
              alt="Vector"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-[#1A1A1A]">64% Discount</p>
            <p className="text-xs text-[#808080]">
              Save your 64% money with us
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="relative h-8 w-8">
            <Image
              src="/assets/images/Vector-2.png"
              alt="Vector"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm text-[#1A1A1A]">100% Organic</p>
            <p className="text-xs text-[#808080]">100% Organic Vegetables</p>
          </div>
        </div>
      </div>
    </div>
  )
}
