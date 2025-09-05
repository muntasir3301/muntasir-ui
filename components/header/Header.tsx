import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenuLinks from "./NavMenuLinks";
import { FaRocket } from "react-icons/fa";

const Header = () => {
  return (
    <nav
      className={`shadow py-3 sticky top-0 border-b border-white z-50 bg-teal-800`}
    >
      <div className="container flex justify-between items-center">
        <Link href={"/"}>
          <h2 className="text-2xl text-gray-200 flex gap-2 items-center"> 
            <FaRocket className="text-orange-600"/> 
            Muntasir Ui</h2>
        </Link>
        <div className="hidden md:block">
          <NavMenuLinks />
        </div>
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Header;
