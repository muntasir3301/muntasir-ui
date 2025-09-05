import Display from "@/components/displayFormet/Display";
import Cart_1 from "./(elements)/Cart_1";

export default async function Card() {
const components = {
	0 : ()=> <Cart_1/>,
}

  return (
	   <Display category={"shopingcart"} components={components} />
  );
}
