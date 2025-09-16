import Display from "@/components/Display";
import Pricing_1 from "./pricing-1/page";
import Pricing_2 from "./pricing-2/page";
import Pricing_3 from "./pricing-3/page";
import Pricing_4 from "./pricing-4/page";
import Pricing_5 from "./pricing-5/page";

export default async function Pricing() {
const components = [
  { name: "pricing-1", title:"Tailwind", component: Pricing_1 },
  { name: "pricing-2", title:"Tailwind", component: Pricing_2 },
  { name: "pricing-3", title:"Tailwind", component: Pricing_3 },
  { name: "pricing-4", title:"Tailwind", component: Pricing_4 },
  { name: "pricing-5", title:"Tailwind", component: Pricing_5 },
];

  return (
  <Display components={components}/>
  );
}