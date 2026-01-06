import Display from "@/components/Display";
import Card_1 from "./card-1/page";
import Card_2 from "./card-2/page";
import Card_3 from "./card-3/page";

export default async function Card() {
const components = [
  { name: "section-1", title:"Tailwind", component: Card_1},
  { name: "section-2", title:"Tailwind", component: Card_2},
  { name: "section-3", title:"Tailwind", component: Card_3},
];

  return (
	<Display components={components}/>
  );
}