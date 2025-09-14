import Link from "next/link";

const NavMenuLinks = () => {
    const pages = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "About",
            "link": "/about"
        },
        {
            "name": "Services",
            "link": "/services"
        },
        {
            "name": "Mobile App",
            "link": "/mobile-app"
        }
    ]

    return (
            <ul className="md:flex md:flex-wrap md:items-center gap-8 text-lg md:text-[15px] space-y-5 md:space-y-0">
                {
                    pages.map((item, i)=>
                        <li key={i}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                }
                <Link href={'/contact'}>
                  <button className="px-4 py-2 rounded text-sm bg-blue-600  text-white cursor-pointer">Contact</button>
                </Link>
            </ul>
    );
};

export default NavMenuLinks;