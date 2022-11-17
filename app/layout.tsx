import { Inter } from "@next/font/google";
import "app/globals.css";
import Navbar from "app/navbar";

const inter = Inter();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <head />
      <body className="flex h-screen flex-col items-center gap-2 bg-slate-50 p-2">
        <Navbar />
        <div className="relative flex w-3/5">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

//bg-slate-50 p-2

function Footer() {
  return <div className=""></div>;
}
