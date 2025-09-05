import Display from "@/components/displayFormet/Display";
import Paigination_1 from "./(elements)/Paigination_1";
import Paigination_2 from "./(elements)/Paigination_2";
import Paigination_3 from "./(elements)/Paigination_3";

export default async function Card() {
const components = {
	0 : ()=> <Paigination_1/>,
	1 : ()=> <Paigination_2/>,
	2 : ()=> <Paigination_3/>,
}

  return (
	   <Display category={"paigination"} components={components} />
  );
}
