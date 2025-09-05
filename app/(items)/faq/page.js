import Display from "@/components/displayFormet/Display";
import Faq_1 from "./(elements)/Faq_1";
import Faq_2 from "./(elements)/Faq_2";

export default async function Card() {
const components = {
	0 : ()=> <Faq_1/>,
	1 : ()=> <Faq_2/>,
}

  return (
	   <Display category={"faq"} components={components} />
  );
}
