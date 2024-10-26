import React from 'react'
import Title from "../ui/Title"
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaRegWindowClose  } from "react-icons/fa";

const Search = ({setIsSearchModal}) => {
  return (
    <div className="fixed position w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-40 grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
<div className='w-full h-full grid place-content-center'>
<div className="relative z-50 md:w-[600px] w-[370px] bg-gray-300 border-2 rounded-2xl p-10">
  <Title addClass="text-[40px] text-center">Search</Title>
  <input type="text" placeholder='Search..' className='border w-full my-10' />
  <div>
    <ul >
        <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
            <div className='relative flex'>
                <Image src="/images/f1.png" alt=""
                width={50}
                height={50}
                />
            </div>
            <span className='font-bold'>Pizza</span>
            <span className='font-bold'>300₺</span>
        </li>
        <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
            <div className='relative flex'>
                <Image src="/images/f1.png" alt=""
                width={50}
                height={50}
                />
            </div>
            <span className='font-bold'>Pizza</span>
            <span className='font-bold'>300₺</span>
        </li>
        <li className='flex items-center justify-between p-1 hover:bg-primary transition-all'>
            <div className='relative flex'>
                <Image src="/images/f1.png" alt=""
                width={50}
                height={50}
                />
            </div>
            <span className='font-bold'>Pizza</span>
            <span className='font-bold'>300₺</span>
        </li>
    </ul>
    <button onClick={() => setIsSearchModal(false)} className='absolute top-4 right-4'>
    <FaRegWindowClose  size={20} className=' hover:text-red-700 transition-all'/>
    </button>
  </div>
</div>
</div>
        </OutsideClickHandler>
    </div>
  )
}

export default Search