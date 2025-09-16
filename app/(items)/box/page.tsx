import Display from "@/components/Display";
import Box_1 from "./box-1/page";

export default async function Box() {
const components = [
  { name: "box-1", title:"Tailwind", component: Box_1},
];

  return (
    <Display components={components}/>
  );
}