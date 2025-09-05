import Display from "@/components/displayFormet/Display";
import Box_1 from "./(elements)/Box_1";

export default async function Card() {
const components = {
	0 : ()=> <Box_1/>,
}

  return (
	   <Display category={"box"} components={components} />
  );
}
