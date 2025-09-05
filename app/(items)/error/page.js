import Display from "@/components/displayFormet/Display";
import Error_1 from "./(elements)/Error_1";
import Error_2 from "./(elements)/Error_2";

export default async function Card() {
const components = {
	0 : ()=> <Error_1/>,
	1 : ()=> <Error_2/>,
}

  return (
	   <Display category={"error"} components={components} />
  );
}
