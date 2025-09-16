import Display from "@/components/Display";
import Footer_1 from "./footer-1/page"
import Footer_4 from "./footer-4/page";
import Footer_3 from "./footer-3/page";
import Footer_2 from "./footer-2/page";

export default async function Footer() {
const components = [
  { name: "footer-1", title:"Tailwind", component: Footer_1 },
  { name: "footer-2", title:"Tailwind", component: Footer_2 },
  { name: "footer-3", title:"Tailwind", component: Footer_3 },
  { name: "footer-4", title:"Tailwind", component: Footer_4 },
];

  return (
	<Display components={components}/>
  );
}