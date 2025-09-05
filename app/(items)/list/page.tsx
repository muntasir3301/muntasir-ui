import Display from "@/components/Display";
import List_1 from "./list-1/page";

export default async function Banner() {
const components = [
  { name: "list-1", title:"Tailwind", component: List_1 },
];

  return (
	<Display components={components}/>
  );
}