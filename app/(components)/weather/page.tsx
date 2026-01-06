import Display from "@/components/Display";
import Weather_1 from "./weather-1/page";
import Weather_2 from "./weather-2/page";
import Weather_3 from "./weather-3/page";

export default async function Banner() {
const components = [
  { name: "weather-1", title:"Tailwind", component: Weather_1 },
  { name: "weather-2", title:"Tailwind", component: Weather_2 },
  { name: "weather-3", title:"Tailwind", component: Weather_3 },
];

  return (
  <Display components={components}/>
  );
}