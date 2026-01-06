import Display from "@/components/Display";
import Section_1 from "./section-1/page";
import Section_2 from "./section-2/page";
import Section_3 from "./section-3/page";

export default async function Contact() {
const components = [
  { name: "section-1", title:"Tailwind", component: Section_1},
  { name: "section-2", title:"Tailwind", component: Section_2},
  { name: "section-3", title:"Tailwind", component: Section_3},
];

  return (
	<Display components={components}/>
  );
}