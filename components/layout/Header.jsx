"use client";
import Search from "../ui/Search";
import { useState } from "react";
import Logo from "../ui/Logo"
import { FaUserAlt, FaSearch  } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegWindowClose  } from "react-icons/fa";
import { useRouter } from "next/router";



const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
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
              <a href="">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.9rem] uppercase hover:text-primary cursor-pointer transition-all">
              <a href="">Book Table</a>
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
          <a href="">
          <FaUserAlt className="hover:text-primary transition-all"/>
          </a>
          <a href="">
          <FaCartShopping className="hover:text-primary transition-all"/>
          </a>
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