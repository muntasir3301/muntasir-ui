import Display from "@/components/Display";
import Input_1 from "./input-1/page";

export default async function Input() {
const components = [
  { name: "input-1", title:"Tailwind", component: Input_1 },
];

  return (
  <Display components={components}/>
  );
}