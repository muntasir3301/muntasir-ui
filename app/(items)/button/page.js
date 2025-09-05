import Display from "@/components/displayFormet/Display";
import Button_1 from "./(elements)/Button_1";

export default async function Card() {
const components = {
	0 : ()=> <Button_1/>,
}

  return (
	   <Display category={"button"} components={components} />
  );
}
