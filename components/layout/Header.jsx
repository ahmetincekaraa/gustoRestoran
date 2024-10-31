"use client";
import Search from "../ui/Search";
import { useState } from "react";
import Logo from "../ui/Logo"
import { FaUserAlt, FaSearch  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose  } from "react-icons/fa";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";


const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);

const router = useRouter();

  return (
    <div className={`h-[5.5rem] z-50 relative ${
      router.asPath === "/" ? "bg-transparent" : "bg-secondary"
    }`}>
       <div className="container mx-auto text-white flex justify-between items-center h-full">
      
            <Logo/>
        
        <nav className={`sm:static absolute top-0 left-0 grid place-content-center sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-gray-300 ${isMenuModal ? "block" : "hidden"} sm:block`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <Link href="/rezervation">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button 
            className='absolute top-4 right-4'
            onClick={() => setIsMenuModal(false)} >
            <FaRegWindowClose  size={20} className=' hover:text-red-700 transition-all'/>
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/login">
          <FaUserAlt className="hover:text-primary transition-all"/>
          </Link>
          <Link href="/cart">
          <span className="relative">
            <FaCartShopping className="hover:text-primary transition-all"/>
            <span className="w-4 h-4 text-xs grid place-content-center rounded-full bg-primary text-secondary absolute -top-3 -right-2 ">{cart.products.length === 0 ? "0" : cart.products.length}</span>

          </span>
          
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
          <FaSearch className="hover:text-primary transition-all"/>
          </button>
          <a href="" className="md:inline-block hidden">
            <button className="btn-primary">
              Order Online
            </button>
          </a>
          <button onClick={() => setIsMenuModal(true)} className="sm:hidden inline-block">
          <RxHamburgerMenu className="text-xl hover:text-primary transition-all"/>
          </button>
        </div>
       </div>
       <div>
       {isSearchModal &&(
        <Search setIsSearchModal={setIsSearchModal}/>
       ) }
       </div>
   </div>
  )
}

export default Header