import Display from "@/components/Display";
import Common_1 from "./common-1/page";

export default async function Common() {
const components = [
  { name: "carousal-1", title:"Tailwind", component: Common_1},
];

  return (
  <Display components={components}/>
  );
}