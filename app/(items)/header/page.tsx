import Display from "@/components/Display";
import Header_1 from "./header-1/page";

export default async function Card() {
  const components = [
	{ name: "header-1", title: "Tailwind CSS", component: Header_1 },
  ];

  return (
	<Display components={components}/>
  );
}