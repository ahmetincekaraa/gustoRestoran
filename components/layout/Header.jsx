"use client";
import Search from "../ui/Search";
import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative w-full ${
        router.asPath === "/" ? "bg-transparent" : "bg-[#01281f] !fixed"
      }`}
    >
      <div className="container mx-auto text-iwhite flex justify-between items-center h-full px-1.5">
        <Logo />

        <nav
          className={`sm:static absolute top-0 left-0 grid place-content-center sm:w-auto sm:h-auto w-full h-screen sm:text-iwhite text-black sm:bg-transparent bg-gray-300 z-50 ${
            isMenuModal ? "block" : "hidden"
          } sm:block`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li
              className={`px-[0.313rem] py-[0.9rem] uppercase hover:text-ired cursor-pointer transition-all ${
                router.asPath === "/" && "text-primary"
              }`}
            >
              <Link onClick={() => setIsMenuModal(false)} href="/">
                Anasayfa
              </Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.9rem] uppercase hover:text-ired cursor-pointer transition-all ${
                router.asPath === "/menu" && "text-primary"
              }`}
            >
              <Link onClick={() => setIsMenuModal(false)} href="/menu">
                Menü
              </Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.9rem] uppercase hover:text-ired cursor-pointer transition-all ${
                router.asPath === "/about" && "text-primary"
              }`}
            >
              <Link onClick={() => setIsMenuModal(false)} href="/about">
                Hakkımızda
              </Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.9rem] uppercase hover:text-ired cursor-pointer transition-all ${
                router.asPath === "/rezervation" && "text-primary"
              }`}
            >
              <Link onClick={() => setIsMenuModal(false)} href="/rezervation">
                Rezervasyon
              </Link>
            </li>
          </ul>
          {isMenuModal && (
            <button
              className="absolute top-4 right-4"
              onClick={() => setIsMenuModal(false)}
            >
              <FaRegWindowClose
                size={20}
                className=" hover:text-red-700 transition-all"
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/login">
            <FaUserAlt
              className={`hover:text-ired transition-all ${
                router.asPath.includes("profile") && "text-primary"
              }`}
              size={18}
            />
          </Link>
          <Link href="/cart">
            <span className="relative group">
              <FaCartShopping
                className={`hover:text-ired transition-all group-hover:text-ired ${
                  router.asPath === "/cart" && "text-primary"
                }`}
                size={18}
              />
              <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary text-secondary absolute -top-3 -right-2 group-hover:bg-ired group font-semibold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-ired transition-all" size={18} />
          </button>
          <a href='menu' className="md:inline-block hidden">
            <button className="btn-primary hover:bg-ired">Sipariş Ver</button>
          </a>
          <button
            onClick={() => setIsMenuModal(true)}
            className="sm:hidden inline-block"
          >
            <RxHamburgerMenu className="text-xl hover:text-primary transition-all" />
          </button>
        </div>
      </div>
      <div>
        {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
      </div>
    </div>
  );
};

export default Header;
