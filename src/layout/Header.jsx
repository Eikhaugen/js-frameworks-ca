import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import CartIcon from "../components/CartIcon";
import SearchModal from "../components/SearchModal";

function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      setIsSearchModalOpen(true);
    } else {
      setIsSearchModalOpen(false);
    }
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchModalOpen(false);
    }
  };
  

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
    setSearchQuery("");
  };

  return (
    <>
      <header className="flex items-center justify-between p-4 bg-white shadow-md relative z-50">
        <Link to="/">
          <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Shop till you drop
          </span>
        </Link>

        <form
          onSubmit={handleSearchSubmit}
          className="relative hidden md:block flex-1 mx-4"
        >
          <i className="fa-solid fa-magnifying-glass absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="w-full border rounded pl-10 pr-3 py-1 focus:outline-none"
          />
        </form>

        <div className="flex items-center space-x-4">
          <CartIcon />

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
          <form onSubmit={handleSearchSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={handleSearchChange}
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
      {isSearchModalOpen && (
        <SearchModal query={searchQuery} onClose={closeSearchModal} />
      )}
    </>
  );
}

export default Header;
