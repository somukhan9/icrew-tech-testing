import Image from 'next/image'

const data = [
  {
    id: 1,
    name: 'Kristin Watson',
    comment: 'Duis at ullamcorper nulla, eu dictum eros.',
    timeAgo: '2 min ago',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    comment:
      'Keep the soil evenly moist for the healthiest growth. If the sun gets too hot, Chinese cabbage tends to "bolt" or go to seed; in long periods of heat, some kind of shade may be helpful. Watch out for snails, as they will harm the plants.',
    timeAgo: '30 Apr, 2021',
  },
  {
    id: 3,
    name: 'Jacob Jones',
    comment:
      ' Vivamus eget euismod magna. Nam sed lacinia nibh, et lacinia lacus.',
    timeAgo: '2 min ago',
  },
  {
    id: 4,
    name: 'Ralph Edwards',
    comment:
      "200+ Canton Pak Choi Bok Choy Chinese Cabbage Seeds Heirloom Non-GMO Productive Brassica rapa VAR. chinensis, a.k.a. Canton's Choice, Bok Choi, from USA",
    timeAgo: '2 min ago',
  },
]

export default function CustomerReview() {
  return (
    <div className="flex max-w-4xl flex-col gap-4">
      {data.map((item, index) => (
        <div key={index} className="border-b  py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden rounded-full">
                <Image
                  src="/assets/images/profile.png"
                  alt="DP"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="text-sm font-medium text-[#1A1A1A]">
                  {item.name}
                </h4>
                <div className="flex items-center">
                  <i className="bx bxs-star text-[#FF8A00]"></i>
                  <i className="bx bxs-star text-[#FF8A00]"></i>
                  <i className="bx bxs-star text-[#FF8A00]"></i>
                  <i className="bx bxs-star text-[#FF8A00]"></i>
                  <i className="bx bxs-star text-[#FF8A00]"></i>
                </div>
              </div>
            </div>
            <p className="text-sm text-[#999999]">{item.timeAgo}</p>
          </div>
          <p className="mt-4 text-sm text-[#808080]">{item.comment}</p>
        </div>
      ))}
      <button className="w-max rounded-full bg-[#56AC591A] px-10 py-4 text-sm font-semibold text-[#00B207]">
        Load More
      </button>
    </div>
  )
}
