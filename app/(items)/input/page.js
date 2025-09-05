import Display from "@/components/displayFormet/Display";
import Input_1 from "./(elements)/Input_1";

export default async function Card() {
const components = {
	0 : ()=> <Input_1/>,
}

  return (
	   <Display category={"input"} components={components} />
  );
}
