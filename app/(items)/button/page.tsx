import Display from "@/components/Display";
import Button_1 from "./button-1/page";

export default async function Contact() {
const components = [
  { name: "button-1", title:"Tailwind", component: Button_1},
];

  return (
    <Display components={components}/>
  );
}