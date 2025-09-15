import Display from "@/components/Display";
import Faq_1 from "./faq-1/page";
import Faq_2 from "./faq-2/page";

export default async function Banner() {
const components = [
  { name: "faq-1", title:"Tailwind", component: Faq_1 },
  { name: "faq-2", title:"Tailwind", component: Faq_2 },
];

  return (
  <Display components={components}/>
  );
}