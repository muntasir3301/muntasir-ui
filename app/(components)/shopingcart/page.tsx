import Display from "@/components/Display";
import Shopingcart_1 from "./shopingcart-1/page";

export default async function Banner() {
const components = [
  { name: "shopingcart-1", title:"Tailwind", component: Shopingcart_1 },
];

  return (
  <Display components={components}/>
  );
}