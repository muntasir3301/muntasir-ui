import Display from "@/components/displayFormet/Display";
import Pricing_1 from "./(elements)/Pricing_1";
import Pricing_2 from "./(elements)/Pricing_2";
import Pricing_3 from "./(elements)/Pricing_3";
import Pricing_4 from "./(elements)/Pricing_4";
import Pricing_5 from "./(elements)/Pricing_5";

export default async function Card() {
const components = {
	0 : ()=> <Pricing_1/>,
	1 : ()=> <Pricing_2/>,
	2 : ()=> <Pricing_3/>,
	3 : ()=> <Pricing_4/>,
	4 : ()=> <Pricing_5/>,
}

  return (
	   <Display category={"pricing"} components={components} />
  );
}
