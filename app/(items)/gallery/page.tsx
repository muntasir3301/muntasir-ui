import Display from "@/components/Display";
import Gallery_1 from "./gallery-1/page";

export default async function Banner() {
const components = [
  { name: "gallery-1", title:"Tailwind", component: Gallery_1 },
];

  return (
  <Display components={components}/>
  );
}