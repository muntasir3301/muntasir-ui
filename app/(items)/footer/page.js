import Display from "@/components/Display";
import Footer_1 from "./footer-1/page"

export default async function Card() {
const components = [
  { name: "footer-1", title:"Tailwind", component: Footer_1 },
];

  return (
	<Display components={components}/>
  );
}