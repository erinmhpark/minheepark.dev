"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navlink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathName = usePathname();
  const active = href === pathName;
  return (
    <Link
      className={
        active
          ? "underline decoration-slate-800 underline-offset-8"
          : "decoration-slate-500 hover:underline hover:underline-offset-8"
      }
      href={href}
    >
      {children}
    </Link>
  );
}
