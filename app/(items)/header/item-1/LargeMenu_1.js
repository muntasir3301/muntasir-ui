"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function LargeMenu_1({ navigation }) {
  const pathname = usePathname();
  
  return (
    <>
      {navigation.map((item) => (
        <Link
          key={item.name}
          href={item.href}
          aria-current={item.current ? "page" : undefined}
          className={` rounded-md px-3 py-2 text-sm font-medium ${
            item.href === pathname
              ? "bg-gray-900 text-white"
              : "text-gray-300 hover:bg-gray-700 hover:text-white"
          }`}
        >
          {item.name}
        </Link>
      ))}
    </>
  );
}
