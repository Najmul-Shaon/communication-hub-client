import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-indigo-600 ${
              isActive ? "text-indigo-600" : "text-black"
            } focus:outline-none`
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/events"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-indigo-600 ${
              isActive ? "text-indigo-600" : "text-black"
            } focus:outline-none`
          }
        >
          Events
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `font-semibold text-base hover:text-primary ${
              isActive ? "text-primary" : "text-black"
            } focus:outline-none`
          }
        >
          About
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-200 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="flex px-1 space-x-6">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
