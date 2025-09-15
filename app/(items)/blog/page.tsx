import Display from "@/components/Display";
import Blog_1 from "./blog-1/page";
import Blog_2 from "./blog-2/page";
import Blog_3 from "./blog-3/page";
import Blog_4 from "./blog-4/page";
import Blog_5 from "./blog-5/page";
import Blog_6 from "./blog-6/page";
import Blog_7 from "./blog-7/page";

export default async function Banner() {
const components = [
  { name: "blog-1", title:"Tailwind", component: Blog_1 },
  { name: "blog-2", title:"Tailwind", component: Blog_2 },
  { name: "blog-3", title:"Tailwind", component: Blog_3 },
  { name: "blog-4", title:"Tailwind", component: Blog_4 },
  { name: "blog-5", title:"Tailwind", component: Blog_5 },
  { name: "blog-6", title:"Tailwind", component: Blog_6 },
  { name: "blog-7", title:"Tailwind", component: Blog_7 },
];

  return (
	<Display components={components}/>
  );
}