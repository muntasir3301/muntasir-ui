"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
// import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Header_1() {
  const pages = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/service" },
    { name: "Contact", href: "/contact" },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current route

  // Close the menu when the route changes
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header className="border">
      <div className="container flex shrink-0 items-center h-16">
        {/* Logo ========================  */}
        <Link href="/" className="mr-6" prefetch={false}>
          <Logo className="h-6 w-6" />
        </Link>

        {/* Desktop Menu ======================== */}
        <nav className="ml-auto hidden lg:flex gap-2">
          {pages?.map((ele) => (
            <Link
              key={ele.name}
              href={ele.href}
              className="group text-sm inline-flex h-9 w-max items-center justify-center rounded-md bg-white px-4 py-2 font-medium transition-colors hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-gray-100/50 data-[state=open]:bg-gray-100/50 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus:bg-gray-800 dark:focus:text-gray-50 dark:data-[active]:bg-gray-800/50 dark:data-[state=open]:bg-gray-800/50"
              prefetch={false}
            >
              {ele.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu ======================== */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* Mobile menu Icon  */}
          <SheetTrigger asChild>
            {/* <Button variant="outline" size="icon" className="lg:hidden ml-auto">
              <MenuIcon className="h-6 w-6" />
            </Button> */}
          </SheetTrigger>

          {/* Mobile Menu */}
          <SheetContent side="left">
            {/* Menu title */}
            <Link href="#" className="mr-6 lg:flex" prefetch={false}>
              <Logo className="h-6 w-6" />
            </Link>

            {/* Menu links */}
            <div className="grid gap-2 py-6">
              {pages?.map((ele) => (
                <Link
                  key={ele.name}
                  href={ele.href}
                  className="flex w-full items-center py-2 font-semibold"
                  prefetch={false}
                >
                  {ele.name}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

function Logo(props) {
  return <h2 className="text-2xl">Muntasir</h2>;
}
