import Display from "@/components/displayFormet/Display";
import Banner_1 from "./(elements)/Banner_1";
import Banner_2 from "./(elements)/Banner_2";
import Banner_3 from "./(elements)/Banner_3";
import Banner_4 from "./(elements)/Banner_4";
import Banner_5 from "./(elements)/Banner_5";

export default async function Card() {
const components = {
	0 : ()=> <Banner_1/>,
	1 : ()=> <Banner_2/>,
	2 : ()=> <Banner_3/>,
	3 : ()=> <Banner_4/>,
	4 : ()=> <Banner_5/>,
}

  return (
	   <Display category={"banner"} components={components} />
  );
}
