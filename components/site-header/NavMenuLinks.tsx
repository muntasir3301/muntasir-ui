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
            <ul className="md:flex md:flex-wrap md:items-center gap-8 text-lg md:text-sm space-y-5 md:space-y-0">
                {
                    pages.map((item, i)=>
                        <li key={i}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                }
            </ul>
    );
};