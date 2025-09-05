import Display from "@/components/displayFormet/Display";
import Profile_1 from "./(elements)/Profile_1";
import Profile_2 from "./(elements)/Profile_2";
import Profile_3 from "./(elements)/Profile_3";
import Profile_4 from "./(elements)/Profile_4";

export default async function Card() {
const components = {
	0 : ()=> <Profile_1/>,
	1 : ()=> <Profile_2/>,
	2 : ()=> <Profile_3/>,
	3 : ()=> <Profile_4/>,
}

  return (
	   <Display category={"profile"} components={components} />
  );
}
