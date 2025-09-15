import Display from "@/components/Display";
import Error_1 from "./error-1/page";
import Error_2 from "./error-2/page";

export default async function Banner() {
const components = [
  { name: "error-1", title:"Tailwind", component: Error_1 },
  { name: "error-2", title:"Tailwind", component: Error_2 },
];

  return (
  <Display components={components}/>
  );
}