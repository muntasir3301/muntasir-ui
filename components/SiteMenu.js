import LargeMenu_1 from "@/app/(items)/header/item-1/LargeMenu_1";
import MobileMenu_1 from "@/app/(items)/header/item-1/MobileMenu_1";
import { FaRocket } from "react-icons/fa6";

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
  } from "@headlessui/react";
  import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
  import Link from "next/link";
  
  const navigation = [
    { name: "Home", href: "/", },
    { name: "Contact", href: "/contact" },
    { name: "Test", href: "/test" },
  ];
  
  export default function SiteMenu() {
    return (
      <Disclosure as="nav" className="bg-teal-800">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Open main menu</span>
                <Bars3Icon
                  aria-hidden="true"
                  className="block size-6 group-data-[open]:hidden"
                />
                <XMarkIcon
                  aria-hidden="true"
                  className="hidden size-6 group-data-[open]:block"
                />
              </DisclosureButton>
            </div>
  
            <div className="flex flex-1 items-center justify-center sm:justify-between">
              <div className="flex shrink-0 items-center">
                <Link href={"/"}>
                  <h2 className="text-2xl text-gray-200 flex gap-2 items-center"> 
                    <FaRocket className="text-orange-600"/> 
                    Muntasir Ui</h2>
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  {/* Large Schrren Menu  */}
                  <LargeMenu_1 navigation={navigation} />
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <DisclosurePanel className="sm:hidden">
          <div className="space-y-1 px-2 pb-3 pt-2">
            {/* Mobile Menu  */}
            <MobileMenu_1 navigation={navigation} />
          </div>
        </DisclosurePanel>
      </Disclosure>
    );
  }
  