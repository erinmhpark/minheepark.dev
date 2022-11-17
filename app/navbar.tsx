import Navlink from "app/navLink";
export default function Navbar() {
  return (
    <header className="sticky top-0 z-10 w-3/5 rounded-md p-4 shadow-md">
      <nav>
        <ul className="flex justify-center gap-12 whitespace-nowrap">
          <li>
            <Navlink href="/">Home</Navlink>
          </li>
          <li>
            <Navlink href="/about">About</Navlink>
          </li>
          <li>
            <Navlink href="/projects">Projects</Navlink>
          </li>
          <li>
            <Navlink href="/readings">Reading List</Navlink>
          </li>
          <li>
            <Navlink href="/contact">Contact Me</Navlink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
