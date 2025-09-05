import Display from "@/components/displayFormet/Display";
import Dashboard_1 from "./(elements)/Dashboard_1";
import Dashboard_2 from "./(elements)/Dashboard_2";

export default async function Card() {
const components = {
	0 : ()=> <Dashboard_1/>,
	1 : ()=> <Dashboard_2/>,
}

  return (
	   <Display category={"dashboard"} components={components} />
  );
}
