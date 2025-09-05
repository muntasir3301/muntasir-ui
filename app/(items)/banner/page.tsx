import Display from "@/components/Display";
import Banner_1 from "./banner-1/page";
import Banner_2 from "./banner-2/page";
import Banner_3 from "./banner-3/page";
import Banner_4 from "./banner-4/page";
import Banner_5 from "./banner-5/page";

export default async function Card() {
const components = [
  { name: "banner-1", title:"Tailwind", component: Banner_1 },
  { name: "banner-2", title:"Tailwind", component: Banner_2 },
  { name: "banner-3", title:"Tailwind", component: Banner_3 },
  { name: "banner-4", title:"Tailwind", component: Banner_4 },
  { name: "banner-5", title:"Tailwind", component: Banner_5 },
];

  return (
	<Display components={components}/>
  );
}