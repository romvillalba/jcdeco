import CandleCard from "@/components/candleCard";

async function getData() {
  /*const res = await fetch("https://api.example.com/...");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();*/
  const frascos = [
    {
      id: 1,
      name: "Vidrio cilíndrico",
      description:
        "Vidrio cilíndrico de 250 ml. Ideal para velas de té, velas de jarra o velas votivas.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
    {
      id: 2,
      name: "Vidrio redondo",
      description:
        "Vidrio redondo de 300 ml. Ideal para velas de pilar o velas de tarro.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
    {
      id: 3,
      name: "Vidrio hexagonal",
      description:
        "Vidrio hexagonal de 200 ml. Ideal para velas de té, velas de jarra o velas votivas.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
    {
      id: 4,
      name: "Vidrio de boca ancha",
      description:
        "Vidrio de boca ancha de 500 ml. Ideal para velas de pilar o velas de tarro.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
    {
      id: 5,
      name: "Vidrio con base de corcho",
      description:
        "Vidrio con base de corcho de 100 ml. Ideal para velas de té, velas de jarra o velas votivas.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
    {
      id: 6,
      name: "Vidrio con base de madera",
      description:
        "Vidrio con base de madera de 250 ml. Ideal para velas de pilar o velas de tarro.",
      destacado: true,
      images: [
        {src:"/img/candle_2.webp",alt:"vela"},
        {src:"/img/candle_3.webp",alt:"vela"},
        {src:"/img/candle_4.webp",alt:"vela"},
        ],
    },
  ];

  return frascos;
}

export default async function Home() {
  const data = await getData();
  return (
    <main className="flex flex-wrap justify-center items-center px-12 py-24 gap-6 lg:gap-20 min-h-[600px]">
      {data.map(frasco => (
        <CandleCard id={frasco.id} name={frasco.name}description={frasco.description}images={frasco.images} key={frasco.id} />
      ))}
    </main>
  );
}
