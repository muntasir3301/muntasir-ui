import { BookOpen, LayoutPanelTop, Notebook, Shapes } from "lucide-react";
import Link from "next/link";

const pages = [
    // {
    //     "name": "Home",
    //     "link": "/"
    // },
    {
        "name": "Documentation",
        "link": "/about",
        "icon" : BookOpen,
    },{
        "name": "Components",
        "link": "/about", 
        "icon" : Shapes,
    },{
        "name": "Templates",
        "link": "/about", 
        "icon" : LayoutPanelTop,
    },
    {
        "name": "Guides",
        "link": "/about",
        "icon" : Notebook,
    }
    // {
    //     "name": "Features",
    //     "link": "/about",
    // }
]

export default function SiteNavMenuLinks(){

    return (
        <ul className="md:flex md:flex-wrap md:items-center text-[13px] space-y-5 md:space-y-0">
            {
                pages.map((item, i)=>{
                    const NavIcon = item.icon;
                    return(
                        <li key={i}>
                            <Link
                                style={{fontWeight: 500}}
                                className="flex items-center gap-1 text-[#171717] hover:text-black px-3 py-1 hover:bg-gray-100 rounded"
                                href={item.link}
                            >
                                <NavIcon size={13}/>
                                {item.name}
                            </Link>
                        </li>
                )})
            }
        </ul>
    );
};