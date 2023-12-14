import CandleCard from "@/components/candleCard";

export default function Home() {
  return (
    <main className="flex flex-wrap justify-center items-center px-12 py-24 gap-6 md:gap-14 min-h-[600px]">
      <CandleCard id={2} />
      <CandleCard id={3} />
      <CandleCard id={4} />
      <CandleCard id={5} />
    </main>
  );
}
