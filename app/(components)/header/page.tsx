import Display from "@/components/Display";
import Header_1 from "./header-1/page";
import Header_2 from "./header-2/page";
import Header_3 from "./header-3/page";
import Header_4 from "./header-2/page";

export default async function Header() {
  const components = [
	{ name: "header-1", title: "Tailwind CSS", component: Header_1 },
	{ name: "header-2", title: "Tailwind CSS", component: Header_2 },
	{ name: "header-3", title: "Tailwind CSS", component: Header_3 },
	{ name: "header-4", title: "Tailwind CSS", component: Header_4 },
  ];

  return (
	<Display components={components}/>
  );
}