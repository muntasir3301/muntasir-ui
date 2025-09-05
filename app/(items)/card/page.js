import Display from "@/components/displayFormet/Display";
import Card_1 from "./(elements)/Card_1";
import Card_2 from "./(elements)/Card_2";
import Card_3 from "./(elements)/Card_3";

export default async function Card() {
const components = {
	0 : ()=> <Card_1/>,
	1 : ()=> <Card_2/>,
	2 : ()=> <Card_3/>
}

  return (
	   <Display category={"card"} components={components} />
  );
}
