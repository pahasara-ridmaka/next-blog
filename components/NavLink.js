"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function NavLink({ href, children }) {
  const pathName = usePathname();

  return (
    <Link
      href={href}
      className={pathName.startsWith(href) ? "active" : undefined}
    >
      {children}
    </Link>
  );
}
