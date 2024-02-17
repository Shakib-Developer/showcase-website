"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { deleteCookie, getCookie } from "cookies-next";
import { useState } from "react";

const Header = () => {
  const [cookieToken, setCookieToken] = useState(getCookie("token"));
  const [cookieGit, setCookieGit] = useState(getCookie("next-auth.csrf-token"));
  const router = useRouter();
  const logoutControl = () => {
    deleteCookie("token");
    deleteCookie("next-auth.csrf-token");
    router.replace("/");
    router.refresh();
    setCookieToken(getCookie("token"));
    setCookieGit(getCookie("next-auth.csrf-token"));
  };

  const NavClick = () => {
    // open
    const burger = document.querySelectorAll(".navbar-burger");
    const menu = document.querySelectorAll(".navbar-menu");

    if (burger.length && menu.length) {
      for (var i = 0; i < burger.length; i++) {
        burger[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    // close
    const close = document.querySelectorAll(".navbar-close");
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    if (close.length) {
      for (var i = 0; i < close.length; i++) {
        close[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }

    if (backdrop.length) {
      for (var i = 0; i < backdrop.length; i++) {
        backdrop[i].addEventListener("click", function () {
          for (var j = 0; j < menu.length; j++) {
            menu[j].classList.toggle("hidden");
          }
        });
      }
    }
  };

  return (
    <header id="navbar" className="flex w-full bg-white py-6">
      <div className="container mx-auto">
        <nav className="relative py-6 flex justify-between items-center">
          {/* Navbar Brand Logo */}
          <Link href="/">
            <h1 className="xl:text-4xl text-xl font-bold text-black uppercase">
              Show<span className="text-[#7e22ce]">Case</span>
            </h1>
          </Link>

          <div className="lg:hidden">
            <button
              onClick={() => {
                NavClick();
              }}
              className="navbar-burger flex items-center text-[#7e22ce] p-3"
            >
              <svg
                className="block h-4 w-4 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Mobile menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>

          <div className="lg:flex lg:justify-between lg:items-center lg:gap-[50px] hidden">
            <ul className="flex gap-[40px] items-center justify-between">
              <li className="nav-item">
                <Link className="navlink" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navlink" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navlink" href="/features">
                  Features
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navlink" href="/services">
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="navlink" href="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div className="cursor-pointer">
              {!!cookieToken || !!cookieGit ? (
                <span className="myBtn" onClick={logoutControl}>
                  Logout
                </span>
              ) : (
                <Link href={"/login"} className="myBtn">
                  Login
                </Link>
              )}
            </div>
          </div>
        </nav>

        {/* Mobile Menu */}

        <div className="hidden navbar-menu fixed top-0 right-0 bottom-0 w-5/6 max-w-sm z-50">
          <div
            onClick={() => {
              NavClick();
            }}
            className="navbar-backdrop  fixed inset-0 bg-gray-800 opacity-25"
          />
          <nav className="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
            <div className="flex items-center mb-8">
              <a className="mr-auto text-3xl font-bold leading-none" href="#">
                <img
                  className="h-10"
                  src="atis-assets/logo/atis/atis-mono-black.svg"
                  alt=""
                  width="auto"
                />
              </a>
              <button
                onClick={() => {
                  NavClick();
                }}
                className="navbar-close"
              >
                <svg
                  className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div>
              <ul className="text-center">
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-black hover:bg-green-50 hover:text-[#7e22ce] rounded"
                    href={"/"}
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-black hover:bg-green-50 hover:text-[#7e22ce] rounded"
                    href={"/about"}
                  >
                    About
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-black hover:bg-green-50 hover:text-[#7e22ce] rounded"
                    href={"/features"}
                  >
                    Features
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-black hover:bg-green-50 hover:text-[#7e22ce] rounded"
                    href={"/services"}
                  >
                    Services
                  </Link>
                </li>
                <li className="mb-1">
                  <Link
                    className="block p-4 text-sm font-semibold text-black hover:bg-green-50 hover:text-[#7e22ce] rounded"
                    href={"/contact"}
                  >
                    Contact
                  </Link>
                </li>

                <li className="mb-1">
                  <Link
                    className="mt-5 block p-4 text-sm font-semibold bg-[#7e22ce] text-white hover:bg-[#783eaa] rounded-md"
                    href={"/login"}
                  >
                    Login
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
