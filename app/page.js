import CandleCard from '@/components/candleCard'


export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-center py-24 min-h-[600px]">
      <CandleCard/>
      <CandleCard/>
      <CandleCard/>
      <CandleCard/>
    </main>
  )
}
