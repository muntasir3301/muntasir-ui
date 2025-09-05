import Display from "@/components/displayFormet/Display";
import Feature_1 from "./(elements)/Feature_1";
import Feature_2 from "./(elements)/Feature_2";
import Feature_3 from "./(elements)/Feature_3";

export default async function Card() {
const components = {
	0 : ()=> <Feature_1/>,
	1 : ()=> <Feature_2/>,
	2 : ()=> <Feature_3/>,
}

  return (
	   <Display category={"banner"} components={components} />
  );
}
