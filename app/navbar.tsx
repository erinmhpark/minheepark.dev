import Navlink from "app/navLink";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-full rounded-md bg-slate-50 p-4 shadow-md sm:w-3/5 ">
      <nav>
        <ul className="flex justify-center gap-4 whitespace-nowrap sm:gap-12">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/about">About</Navlink>
          </li>
          <li>
            <Navlink href="/projects">Projects</Navlink>
          </li>
          {/* <li>
            <Navlink href="/readings">Reading List</Navlink>
          </li> */}
          <li>
            <Navlink href="/contact">Contact Me</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
