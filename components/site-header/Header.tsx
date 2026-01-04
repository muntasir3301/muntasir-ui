import Link from "next/link";
import MobileMenu from "./mobile-view/MobileMenu";
import { FaGithub, FaRocket } from "react-icons/fa";
import SiteNavMenuLinks from "./NavMenuLinks";
import { InputGroup, InputGroupAddon, InputGroupInput } from "../ui/input-group";
import { Search } from "lucide-react";

const Header = () => {
  return (
    <nav
      className={`shadow py-3 sticky top-0 border-b border-white z-50 bg-white/90`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo & Nav Links  */}
        <div className="flex items-center gap-10">
          <Link href={"/"}>
            <h2 className="text-lg flex gap-2 items-center"> 
              <FaRocket className="text-orange-600"/> 
              Muntasir Ui
            </h2>
          </Link>

          <div className="hidden md:block">
            <SiteNavMenuLinks />
          </div>
        </div>

        {/* Search & Github Link  */}
        <div className="hidden md:flex items-center gap-6">
          <InputGroup className="w-88 focus:outline-0">
            <InputGroupInput placeholder="Search..." />
            <InputGroupAddon>
              <Search />
            </InputGroupAddon>
            <InputGroupAddon align="inline-end">12 results</InputGroupAddon>
          </InputGroup>

          {/* <input type="text" placeholder="Search componets" /> */}
          <Link target="_blank" href={'https://github.com/muntasir3301/muntasir-ui'}>
              <FaGithub size={20} className="text-orange-500"/>
          </Link>
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Header;