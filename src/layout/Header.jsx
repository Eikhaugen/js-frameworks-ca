import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md relative">
        <Link to="/">
        <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
  Shop till you drop
</span>

        </Link>

        <form action="" className="hidden md:block flex-1 mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border rounded px-3 py-1 focus:outline-none"
          />
        </form>

        <div className="flex items-center space-x-4">
          <Link to="cart/" className="text-xl">
            <i className="fa-solid fa-cart-shopping"></i>
          </Link>

          <button
            className="md:hidden text-xl"
            onClick={() => setIsMobileSearchOpen(!isMobileSearchOpen)}
            aria-label="Toggle Search"
          >
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          <button
            id="menuToggle"
            className="md:hidden text-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
        </div>

        <nav className="hidden md:block">
          <ul className="flex items-center space-x-4">
            <li>
              <NavLink to="/" className="hover:text-blue-600">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="contact/" className="hover:text-blue-600">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>

      {isMobileSearchOpen && (
        <div className="bg-white p-4 shadow-md md:hidden">
          <form action="">
            <input
              type="text"
              placeholder="Search..."
              className="w-full border rounded px-3 py-2 focus:outline-none"
            />
          </form>
        </div>
      )}

      <nav
        className={`
          md:hidden
          absolute top-16 left-0 w-full bg-white p-4 transition-transform duration-300 z-10
          ${isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <ul className="flex flex-col space-y-2">
          <li>
            <NavLink
              to="/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="contact/"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block hover:text-blue-600"
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Header;
