import Display from "@/components/Display";
import Feature_1 from "./feature-1/page";
import Feature_2 from "./feature-2/page";

export default async function Banner() {
const components = [
  { name: "feature-1", title:"Tailwind", component: Feature_1 },
  { name: "feature-2", title:"Tailwind", component: Feature_2 },
];

  return (
  <Display components={components}/>
  );
}