import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenuLinks from "./NavMenuLinks";

const Header = () => {
  return (
    <nav className={`shadow-sm py-3 sticky top-0 border-[1px] border-gray-200 z-20 bg-white`}>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <h2 className="text-2xl">Muntasir</h2>
          {/* <Image src={Logo} width={350} height={50} alt="logo" /> */}
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
