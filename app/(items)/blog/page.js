import Display from "@/components/displayFormet/Display";
import Blog_1 from "./(elements)/Blog_1";
import Blog_2 from "./(elements)/Blog_2";
import Blog_3 from "./(elements)/Blog_3";
import Blog_4 from "./(elements)/Blog_4";
import Blog_5 from "./(elements)/Blog_5";
import Blog_6 from "./(elements)/Blog_6";
import Blog_7 from "./(elements)/Blog_7";

export default async function Card() {
const components = {
	0 : ()=> <Blog_1/>,
	1 : ()=> <Blog_2/>,
	2 : ()=> <Blog_3/>,
	3 : ()=> <Blog_4/>,
	4 : ()=> <Blog_5/>,
	5 : ()=> <Blog_6/>,
	6 : ()=> <Blog_7/>,
}

  return (
	   <Display category={"blog"} components={components} />
  );
}
