import HotDeals from "@/components/HotDeals";
import Newsletter from "@/components/Newsletter";
import PopularProducts from "@/components/PopularProducts";
import Slider from "@/components/SlidingBanner/Slider";
import TopCategory from "@/components/TopCategory";

export default function Home() {
  return (
    <main className="bg-white w-full h-full">
      <Slider/>
      <TopCategory/>
      <PopularProducts/>
      <HotDeals/>
      <Newsletter/>
    </main>
  )
}
