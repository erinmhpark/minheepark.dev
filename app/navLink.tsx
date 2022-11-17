"use client"; // rendering the page on client
// Q: why not render on server??
// A: because server is static.
// And What we are doing here is dynamic, rendering depends on the user's action.
// i.e., click to borderline an item on the navbar
import Link from "next/link"; // difference from named function?
import { usePathname } from "next/navigation";
import React from "react";

export default function Navlink({
  href,
  children, // what is children doing here?
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const active = href === pathName;
  return (
    <Link
      className={
        active ? "underline decoration-slate-500 underline-offset-8" : ""
      }
      href={href}
    >
      {children}
    </Link>
  );
}
