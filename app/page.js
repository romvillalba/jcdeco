import CandleCard from '@/components/candleCard'


export default function Home() {
  return (
    <main className="flex flex-wrap justify-center gap-16 items-center py-24 min-h-[600px]">
      <CandleCard id={2} />
      <CandleCard id={3} />
      <CandleCard id={4} />
      <CandleCard id={5} />
    </main>
  )
}
