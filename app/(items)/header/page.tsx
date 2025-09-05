// import Display from "@/components/displayFormet/Display";
// import Header_3 from "./(elements)/Header_3";
// import Header_4 from "./(elements)/Header_4";
// import Header_5 from "./(elements)/Header_5";
// import Header_6 from "./(elements)/Header_6";

import Link from "next/link";
import Header from "@/components/header/Header";
import Header_1 from "./header-1/page";

export default async function Card() {
// const components = {
// 	0 : ()=> <Header_1/>,
// 	// 1 : ()=> <Header_3/>,
// 	// 2 : ()=> <Header_4/>,
// 	// 3 : ()=> <Header_5/>,
// 	// 4 : ()=> <Header_6/>,
// }
const components = [
    ()=> <Header/>,
    ()=> <Header_1/>,
    // ()=> <Header_2/>,
]

  return (
	<section className="py-20">
		<div className="container">
			
			{
				components.map((Item, i)=>
				  <div key={i} className="py-6">
					<div className="flex gap-5 mb-5 text-sm">
						<Link href='/header/header-1'>
							<button className="py-2 px-4 border border-gray-300 rounded cursor-pointer">Preview</button>
						</Link>
						<Link href='/header-1'>
							<button className="py-2 px-4 border border-gray-300 rounded cursor-pointer">Code</button>
						</Link>
					</div>
					<div key={i} className="px-6 py-8 border border-gray-300 rounded">
						<Item/>
					</div>
				  </div>
				)
			}
			
		</div>
	</section>
  );
}