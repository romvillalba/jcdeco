import CandleCard from "@/components/candleCard";
import React from "react";

const page = () => {
  return (
    <main className="flex flex-wrap justify-center items-center py-24 min-h-[600px]">
      <CandleCard id={2}/>
      <CandleCard id={3}/>
      <CandleCard id={4}/>
      <CandleCard id={5}/>
    </main>
  );
};

export default page;
