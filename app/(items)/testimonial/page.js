import Display from "@/components/displayFormet/Display";
import Testimonial_1 from "./(elements)/Testimonial_1";
import Testimonial_2 from "./(elements)/Testimonial_2";
import Testimonial_3 from "./(elements)/Testimonial_3";
import Testimonial_4 from "./(elements)/Testimonial_4";

export default async function Card() {
const components = {
	0 : ()=> <Testimonial_1/>,
	1 : ()=> <Testimonial_2/>,
	2 : ()=> <Testimonial_3/>,
	3 : ()=> <Testimonial_4/>,
}

  return (
	   <Display category={"testimonial"} components={components} />
  );
}
