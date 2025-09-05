import Display from "@/components/displayFormet/Display";
import Carousal_1 from "./(elements)/Carousal_1";

export default async function Card() {
const components = {
	0 : ()=> <Carousal_1/>,
}

  return (
	   <Display category={"carousal"} components={components} />
  );
}
