/* eslint-disable react/no-unescaped-entities */
import { Link, NavLink } from "react-router-dom";
import { IoSearch } from "react-icons/io5";

function PageNav() {
  return (
    <nav className="fixed z-10 flex items-center justify-between bg-gray-100 opacity-80 py-6 top-0 w-full ">
      <div className="flex flex-shrink-0 items-center ml-40">
        <Link className="cursor-pointer text-4xl text-gray-600" to="/">
          LEROII'S BLOG
        </Link>
      </div>

      <div className="m-8 flex items-center justify-center gap-8 text-2xl mr-40">
        <NavLink
          to="/"
          className="cursor-pointer transition ease-in-out text-blue-900 hover:text-orange-400"
        >
          HOME
        </NavLink>
        <NavLink
          to="/about"
          className="cursor-pointer transition ease-in-out text-blue-900 hover:text-orange-400"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/dropdown"
          className="cursor-pointer transition ease-in-out text-blue-900 hover:text-orange-400"
        >
          DROPDOWN
        </NavLink>
        <NavLink
          to="/blog"
          className="cursor-pointer transition ease-in-out text-blue-900 hover:text-orange-400"
        >
          BLOG
        </NavLink>
        <NavLink
          to="/contact"
          className="cursor-pointer transition ease-in-out text-blue-900 hover:text-orange-400"
        >
          CONTACT
        </NavLink>
        <NavLink
          to="/search"
          className="cursor-pointer hover:text-blue-700 text-orange-400"
        >
          <IoSearch />
        </NavLink>
      </div>
    </nav>
  );
}

export default PageNav;

// <nav className="flex ">
//   <h1>Leroii's Blog</h1>

//   <ul className="flex flex-col">
//     <NavLink to="/">HOME</NavLink>
//     <NavLink to="/about">ABOUT</NavLink>
//     <NavLink to="/dropdown">DROPDOWN</NavLink>
//     <NavLink to="/dropdown">x</NavLink>
//   </ul>
// </nav>
