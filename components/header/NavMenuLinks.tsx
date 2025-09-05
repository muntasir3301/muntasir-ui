import Link from "next/link";
import { FaGithub } from "react-icons/fa";

const NavMenuLinks = () => {
    const pages = [
        {
            "name": "Home",
            "link": "/"
        },
        {
            "name": "About",
            "link": "/about"
        }
    ]
    // let githubStars;
    // fetch("https://api.github.com/repos/muntasir3301/muntasir-ui")
    // .then(res => res.json())
    // .then(data =>githubStars = data.stargazers_count );


    return (
            <ul className="md:flex md:flex-wrap md:items-center gap-8 text-lg md:text-[15px] space-y-5 md:space-y-0 text-white">
                {
                    pages.map((item, i)=>
                        <li key={i}>
                            <Link href={item.link}>{item.name}</Link>
                        </li>
                    )
                }
                <li>
                    <Link target="_blank" href={'https://github.com/muntasir3301/muntasir-ui'}><FaGithub className="text-orange-500 text-3xl"/></Link>
                </li>
            </ul>
    );
};

export default NavMenuLinks;