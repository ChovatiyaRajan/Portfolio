import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="text-white text-4xl font-bold">Rajan</div>

            {/* Desktop Nav Links */}
            <div className="hidden sm:block">
              <div className="flex space-x-5">
                <NavLink
                  className={(e) =>
                    `px-3 py-2 hover:font-bold text-white ${
                      e.isActive && "bg-blue-100 rounded font-bold !text-black"
                    }`
                  }
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  className={(e) =>
                    `px-4 py-2 hover:font-bold text-white ${
                      e.isActive && "bg-blue-100 rounded font-bold !text-black"
                    }`
                  }
                  to="/about"
                >
                  About
                </NavLink>
                <NavLink
                  className={(e) =>
                    e.isActive
                      ? "bg-blue-100 rounded px-4 py-2 text-black !font-bold"
                      : " px-4 py-2 text-white hover:font-bold"
                  }
                  to="/projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className={(e) =>
                    `px-4 py-2 text-white hover:font-bold ${
                      e.isActive && "!bg-blue-100 rounded font-bold !text-black"
                    }`
                  }
                  to="/contect"
                >
                  Contects
                </NavLink>
              </div>
            </div>

            {/* Mobile Hamburger Icon */}
            <div className="sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                type="button"
                className="text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-white"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            isMobileMenuOpen ? "block transition-all" : "hidden"
          } sm:hidden bg-black text-white text-center`}
          id="mobile-menu"
        >
          <div className="space-y-1 px-2 pt-2 pb-3">
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive && "bg-blue-100 rounded font-bold !text-black"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive && "bg-blue-100 rounded font-bold !text-black"
                }`
              }
              to="/about"
            >
              About
            </NavLink>
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive && "bg-blue-100 rounded font-bold !text-black"
                }`
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive && "bg-blue-100 rounded font-bold !text-black"
                }`
              }
              to="/contect"
            >
              Contects
            </NavLink>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
