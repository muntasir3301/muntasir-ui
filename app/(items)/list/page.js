import Display from "@/components/displayFormet/Display";
import List_1 from "./(elements)/List_1";

export default async function Card() {
const components = {
	0 : ()=> <List_1/>,
}

  return (
	   <Display category={"list"} components={components} />
  );
}
