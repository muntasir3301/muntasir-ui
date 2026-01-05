import Link from "next/link";
import MobileMenu from "./mobile-view/MobileMenu";
import { FaRocket } from "react-icons/fa";
import SiteNavMenuLinks from "./NavMenuLinks";
import GithubStars from "@/components/site-header/github-stars/GithubStars";
import ThemeSwitch from "./theme-switch/ThemeSwitch";
import SearchComponents from "./search/SearchComponents";

const Header = () => {
  return (
    <nav
      className={`shadow py-2.5 sticky top-0 border-b border-white z-50 bg-white/95`}
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

        {/* Search & Github & Theme Switch */}
        <div className="hidden md:flex items-center gap-2">
          <SearchComponents/>
              <hr className="border-[1px] border-gray-200 h-4 " />
            <GithubStars/>
              <hr className="border-[1px] border-gray-200 h-4 " />
            <ThemeSwitch/>
        </div>
      </div>

      <MobileMenu />
    </nav>
  );
};

export default Header;