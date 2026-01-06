import Display from "@/components/Display";
import Carousal_1 from "./carousal-1/page";

export default async function Carousal() {
const components = [
  { name: "carousal-1", title:"Tailwind", component: Carousal_1},
];

  return (
  <Display components={components}/>
  );
}