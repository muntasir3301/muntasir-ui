import Link from "next/link";
import { FC } from "react";

type ComponentsProps={
    name: string,
    title: string;
    component: FC;
}

export default async function Display({components}: {components: ComponentsProps[]}) {
const source = "https://github.com/muntasir3301/muntasir-ui/blob/main/app/(items)";

  return (
	<section className="py-12">
		<div className="container">
			{
				components.map(({name, title, component: Component}: ComponentsProps)=>
				  <div key={name} className="py-6">
					<div className="flex justify-between items-center mb-4">
						{/* Title  */}
						<div>
							<h2 className="text-xl border-l-[3px] border-teal-700 pl-2">{title}</h2>
						</div>
						{/* Buttons  */}
						<div className="flex gap-3 md:gap-4 text-xs md:text-sm">
							<Link href={`/${name.split("-")[0]}/${name}`}>
								<button className="py-2 px-4 border border-gray-300 rounded cursor-pointer">Preview</button>
							</Link>
							<Link target="_blank" href={`${source}/${name.split("-")[0]}/${name}`}>
								<button className="py-2 px-2 md:px-4 border border-gray-300 rounded cursor-pointer">Code</button>
							</Link>
						</div>
					</div>
					<div className="px-3 md:px-6 py-3 md:py-8 border border-gray-300 rounded">
						<Component/>
					</div>
				  </div>
				)
			}
		</div>
	</section>
  );
}