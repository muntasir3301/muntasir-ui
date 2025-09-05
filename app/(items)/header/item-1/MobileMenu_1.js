"use client";

import { DisclosureButton } from "@headlessui/react";
import { usePathname } from "next/navigation";

export default function MobileMenu_1({ navigation }) {
  const pathname = usePathname();

  return (
    <>
      {navigation.map((item) => (
        <DisclosureButton
          key={item.name}
          as="a"
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={`block rounded-md px-3 py-2 text-base font-medium ${
            item.href === pathname
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {item.name}
        </DisclosureButton>
      ))}
    </>
  );
}
