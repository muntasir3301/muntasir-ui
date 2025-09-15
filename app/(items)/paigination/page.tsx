import Display from "@/components/Display";
import Paigination_1 from "./paigination-1/page";
import Paigination_2 from "./paigination-2/page";
import Paigination_3 from "./paigination-3/page";

export default async function Banner() {
const components = [
  { name: "paigination-1", title:"Tailwind", component: Paigination_1 },
  { name: "paigination-2", title:"Tailwind", component: Paigination_2 },
  { name: "paigination-3", title:"Tailwind", component: Paigination_3 },
];

  return (
  <Display components={components}/>
  );
}