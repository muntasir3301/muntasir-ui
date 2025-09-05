import Display from "@/components/displayFormet/Display";
import Team_1 from "./(elements)/Team_1";
import Team_2 from "./(elements)/Team_2";
import Team_3 from "./(elements)/Team_3";
import Team_4 from "./(elements)/Team_4";

export default async function Card() {
const components = {
	0 : ()=> <Team_1/>,
	1 : ()=> <Team_2/>,
	2 : ()=> <Team_3/>,
	3 : ()=> <Team_4/>,
}

  return (
	   <Display category={"team"} components={components} />
  );
}
