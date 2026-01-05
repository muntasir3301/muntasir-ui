import Link from "next/link";

const pages = [
    {
        "name": "Home",
        "link": "/"
    },{
        "name": "Guides",
        "link": "/about"
    },{
        "name": "Documentation",
        "link": "/about"
    },{
        "name": "Components",
        "link": "/about"
    },{
        "name": "Features",
        "link": "/about"
    }
]

export default function SiteNavMenuLinks(){

    return (
        <ul className="md:flex md:flex-wrap md:items-center gap- text-lg md:text-sm space-y-5 md:space-y-0">
            {
                pages.map((item, i)=>
                    <li key={i}>
                        <Link className="text-[#171717] hover:text-black px-3 py-1 hover:bg-gray-100 rounded" href={item.link}>
                            {item.name}
                        </Link>
                    </li>
                )
            }
        </ul>
    );
};