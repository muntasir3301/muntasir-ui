import Display from "@/components/Display";
import Review_1 from "./review-1/page";
import Review_2 from "./review-2/page";
import Review_3 from "./review-3/page";

export default async function Banner() {
const components = [
  { name: "review-1", title:"Tailwind", component: Review_1 },
  { name: "review-2", title:"Tailwind", component: Review_2 },
  { name: "review-3", title:"Tailwind", component: Review_3 },
];

  return (
  <Display components={components}/>
  );
}