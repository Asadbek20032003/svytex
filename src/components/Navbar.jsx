import { NavLink } from "react-router-dom";
import { useState } from "react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [doubleDropdownOpen, setDoubleDropdownOpen] = useState(false);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const toggleDoubleDropdown = () => setDoubleDropdownOpen(!doubleDropdownOpen);

  return (
    <div className="container m-auto bg-[#0000] ">
      <nav className="bg-transparent dark:bg-gray-900 fixed w-full z-20 top-0 start-0">
        <div className="max-w-screen-xl flex flex-wrap items-top justify-between mx-auto">
          <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse p-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">SVYTEX</span>
          </NavLink>
          <div className="flex mf:order-2 space-x-3 mf:space-x-0 rtl:space-x-reverse p-4">
            <button
              type="button"
              className="text-white bg-[#099BE8] mf:block hidden hover:bg-[#098be9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Присоединиться
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg mf:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={toggleNavbar}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              navbarOpen ? "block" : "hidden"
            } w-full mf:flex mf:w-auto mf:order-1`}
            id="navbar-sticky"
          >
            <ul
              style={{
                borderRadius: "0 0 2rem 2rem",
              }}
              className="flex flex-col mf:pl-8 mf:p-5 mt-4 font-medium border border-gray-100 bg-gray-50 mf:space-x-8 rtl:space-x-reverse mf:flex-row mf:mt-0 mf:border-0 mf:bg-white dark:bg-gray-800 mf:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded mf:bg-transparent mf:text-blue-700 mf:p-0 mf:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 mf:hover:bg-transparent mf:hover:text-blue-700 mf:p-0 mf:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mf:dark:hover:bg-transparent dark:border-gray-700"
                  }
                  aria-current="page"
                >
                  Главное
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/instructions"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded mf:bg-transparent mf:text-blue-700 mf:p-0 mf:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 mf:hover:bg-transparent mf:hover:text-blue-700 mf:p-0 mf:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mf:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Инструкция
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/prices"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded mf:bg-transparent mf:text-blue-700 mf:p-0 mf:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 mf:hover:bg-transparent mf:hover:text-blue-700 mf:p-0 mf:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white mf:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Прайс
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/how-to-start"
                  className={({ isActive }) =>
                    isActive
                      ? "block py-2 px-3 text-white bg-blue-700 rounded mf:bg-transparent mf:text-blue-700 mf:p-0 mf:dark:text-blue-500"
                      : "block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 mf:hover:bg-transparent mf:hover:text-blue-700 mf:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  }
                >
                  Как начать
                </NavLink>
              </li>
              <li>
                <button
                  id="dropdownNavbarLink"
                  data-dropdown-toggle="dropdownNavbar"
                  className="flex items-center justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  onClick={toggleDropdown}
                >
                  Ещё
                  <svg
                    className="w-2.5 h-2.5 ms-2.5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 4 4 4-4"
                    />
                  </svg>
                </button>

                <div
                  id="dropdownNavbar"
                  className={`absolute ${
                    dropdownOpen ? "block" : "hidden"
                  } font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600`}
                >
                  <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownLargeButton">
                    <li>
                      <NavLink
                        to="/main"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                            : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        }
                      >
                        Главное
                      </NavLink>
                    </li>
                    <li aria-labelledby="dropdownNavbarLink">
                      <button
                        id="doubleDropdownButton"
                        data-dropdown-toggle="doubleDropdown"
                        data-dropdown-placement="right-start"
                        type="button"
                        className="flex items-center justify-between w-full px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={toggleDoubleDropdown}
                      >
                        Ещё
                        <svg
                          className="w-2.5 h-2.5 ms-2.5"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 10 6"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m1 1 4 4 4-4"
                          />
                        </svg>
                      </button>
                      <div
                        id="doubleDropdown"
                        className={`absolute left-full top-0 ${
                          doubleDropdownOpen ? "block" : "hidden"
                        } z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
                      >
                        <ul
                          className="py-2 text-sm text-gray-700 dark:text-gray-200"
                          aria-labelledby="doubleDropdownButton"
                        >
                          <li>
                            <NavLink
                              to="/instruction"
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                                  : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              }
                            >
                              Инструкция
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/my-downloads"
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                                  : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              }
                            >
                              Мои загрузки
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/price"
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                                  : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              }
                            >
                              Прайс
                            </NavLink>
                          </li>
                          <li>
                            <NavLink
                              to="/how-start"
                              className={({ isActive }) =>
                                isActive
                                  ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                                  : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                              }
                            >
                              Как начать
                            </NavLink>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li>
                      <NavLink
                        to="/how-to"
                        className={({ isActive }) =>
                          isActive
                            ? "block px-4 py-2 bg-gray-100 dark:bg-gray-600 dark:text-white"
                            : "block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        }
                      >
                        Как начать
                      </NavLink>
                    </li>
                  </ul>
                  <div className="py-1">
                    <NavLink
                      to="/sign-out"
                      className={({ isActive }) =>
                        isActive
                          ? "block px-4 py-2 text-sm bg-gray-100 dark:bg-gray-600 dark:text-white"
                          : "block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                      }
                    >
                      Выйти
                    </NavLink>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
