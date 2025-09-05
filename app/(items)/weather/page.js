import Display from "@/components/displayFormet/Display";
import Weather_1 from "./(elements)/Weather_1";
import Weather_2 from "./(elements)/Weather_2";
import Weather_3 from "./(elements)/Weather_3";

export default async function Card() {
const components = {
	0 : ()=> <Weather_1/>,
	1 : ()=> <Weather_2/>,
	2 : ()=> <Weather_3/>,
}

  return (
	   <Display category={"weather"} components={components} />
  );
}
