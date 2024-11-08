import Image from 'next/image'
import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import Link from 'next/link';

const MenuItem = ({product}) => {
    console.log(product.img)
  return (
    
        <div className='bg-secondary rounded-3xl'>
            <div className='w-full bg-white h-52 grid place-content-center rounded-bl-[46px]'>
            <Link href="/product">
            <div className='relative md:w-36 md:h-36 w-36 h-36 '>
                <Image src={(product.img)} alt='' layout='fill' className='hover:scale-110 transition-all duration-300' priority/>
                
            </div>
            </Link>
            </div>
            i
            <div className='p-6 text-white items-center'>
            <div >
                <h4 className='text-xl font-semibold'>{product.title}</h4>
                <p className='text-sm'>{product.desc}</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>{product.prices[0]} ₺</span>
                <button className='btn-primary h-10 w-10 rounded-full !p-0 grid place-content-center'><FaShoppingCart/></button>
            </div>
            </div>
            
        </div>
    
  )
}

export default MenuItem