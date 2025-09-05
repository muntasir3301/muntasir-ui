import Display from "@/components/displayFormet/Display";
import Section_1 from "./(elements)/Section_1";
import Section_2 from "./(elements)/Section_2";
import Section_3 from "./(elements)/Section_3";

export default async function Card() {
const components = {
	0 : ()=> <Section_1/>,
	1 : ()=> <Section_2/>,
	2 : ()=> <Section_3/>,
}

  return (
	   <Display category={"section"} components={components} />
  );
}
