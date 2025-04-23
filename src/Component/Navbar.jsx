import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="bg-black">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-20 items-center justify-between">
            <div className="text-white text-4xl font-bold">Rajan</div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-5">
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
          </div>
        </div>
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3 text-center">
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive &&
                  "bg-blue-100 rounded font-bold !text-black text-center"
                }`
              }
              to="/"
            >
              Home
            </NavLink>

            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white  ${
                  e.isActive &&
                  "bg-blue-100 rounded font-bold !text-black text-center"
                }`
              }
              to="/about"
            >
              About
            </NavLink>

            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white  ${
                  e.isActive &&
                  "bg-blue-100 rounded font-bold !text-black text-center"
                }`
              }
              to="/projects"
            >
              Projects
            </NavLink>
            <NavLink
              className={(e) =>
                `px-3 block py-2 hover:font-bold text-white ${
                  e.isActive &&
                  "bg-blue-100 rounded font-bold !text-black text-center"
                }`
              }
              to="/contect"
            >
              Contects
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet/>
    </>
  );
};

export default Navbar;
