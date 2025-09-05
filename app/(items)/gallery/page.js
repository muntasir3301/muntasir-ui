import Display from "@/components/displayFormet/Display";
import Gallery_1 from "./(elements)/Gallery_1";

export default async function Card() {
const components = {
	0 : ()=> <Gallery_1/>,
}

  return (
	   <Display category={"gallery"} components={components} />
  );
}
