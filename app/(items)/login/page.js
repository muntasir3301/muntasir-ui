import Display from "@/components/displayFormet/Display";
import Login_1 from "./(elements)/Login_1";
import Login_2 from "./(elements)/Login_2";

export default async function Card() {
const components = {
	0 : ()=> <Login_1/>,
	1 : ()=> <Login_2/>,
}

  return (
	   <Display category={"login"} components={components} />
  );
}
