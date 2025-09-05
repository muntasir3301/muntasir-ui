import Link from "next/link";
import MobileMenu from "./MobileMenu";
import NavMenuLinks from "./NavMenuLinks";

const Header = () => {
  return (
    <nav
      className={`shadow py-1 sticky top-0 border-b border-white z-50 bg-white`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          Muntasir
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
