import Display from "@/components/Display";
import Testimonial_1 from "./testimonial-1/page";
import Testimonial_2 from "./testimonial-2/page";
import Testimonial_3 from "./testimonial-3/page";
import Testimonial_4 from "./testimonial-4/page";
import Testimonial_5 from "./testimonial-5/page";

export default async function Banner() {
const components = [
  { name: "testimonial-1", title:"Tailwind", component: Testimonial_1 },
  { name: "testimonial-2", title:"Tailwind", component: Testimonial_2 },
  { name: "testimonial-3", title:"Tailwind", component: Testimonial_3 },
  { name: "testimonial-4", title:"Tailwind", component: Testimonial_4 },
  { name: "testimonial-5", title:"Tailwind", component: Testimonial_5 },
];

  return (
  <Display components={components}/>
  );
}