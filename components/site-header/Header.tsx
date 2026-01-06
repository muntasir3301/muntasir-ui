import Link from "next/link";
import MobileMenu from "./mobile-view/MobileMenu";
import SiteNavMenuLinks from "./NavMenuLinks";
import GithubStars from "@/components/site-header/github-stars/GithubStars";
import ThemeSwitch from "./theme-switch/ThemeSwitch";
import SearchComponents from "./search/SearchComponents";
import { Rotate3d } from "lucide-react";

const Header = () => {
  return (
    <nav
      className={`py-2 sticky top-0 border-b border-white z-50
      bg-white/90 text-base-content flex h-14 w-full [transform:translate3d(0,0,0)] justify-center backdrop-blur transition-shadow duration-100 print:hidden
      shadow-xs`}
    >
      <div className="container flex justify-between items-center">
        {/* Logo & Nav Links  */}
        <div className="flex items-center gap-6">
          <Link href={"/"}>
            <h2 className="text-lg font-semibold flex gap-1 items-center"> 
              <Rotate3d className="text-orange-600"/> 
              MuntasirUI
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