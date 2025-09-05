import Display from "@/components/displayFormet/Display";
import Review_1 from "./(elements)/Review_1";
import Review_2 from "./(elements)/Review_2";
import Review_3 from "./(elements)/Review_3";

export default async function Card() {
const components = {
	0 : ()=> <Review_1/>,
	1 : ()=> <Review_2/>,
	2 : ()=> <Review_3/>,
}

  return (
	   <Display category={"review"} components={components} />
  );
}
