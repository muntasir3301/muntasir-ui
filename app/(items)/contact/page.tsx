import Display from "@/components/Display";
import Contact_1 from "./contact-1/page";
import Contact_2 from "./contact-2/page";
import Contact_3 from "./contact-3/page";
import Contact_4 from "./contact-4/page";
import Contact_5 from "./contact-5/page";

export default async function Contact() {
const components = [
  { name: "contact-1", title:"Tailwind", component: Contact_1 },
  { name: "contact-1", title:"Tailwind", component: Contact_2 },
  { name: "contact-1", title:"Tailwind", component: Contact_3 },
  { name: "contact-1", title:"Tailwind", component: Contact_4 },
  { name: "contact-1", title:"Tailwind", component: Contact_5 },
];

  return (
	<Display components={components}/>
  );
}