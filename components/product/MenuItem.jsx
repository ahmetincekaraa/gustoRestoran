import Image from 'next/image'
import React from 'react'
import Title from '../ui/Title'
import { FaShoppingCart } from "react-icons/fa";

const MenuItem = () => {
  return (
    
        <div className='bg-secondary rounded-3xl'>
            <div className='w-full bg-white h-52 grid place-content-center rounded-bl-[46px]'>
            <div className='relative md:w-36 md:h-36 w-36 h-36 '>
                <Image src="/images/f1.png" alt='' layout='fill' className='hover:scale-110 transition-all duration-300'/>
            </div>
            </div>
            i
            <div className='p-6 text-white items-center'>
            <div >
                <h4 className='text-xl font-semibold'>Delicious Pizza</h4>
                <p className='text-sm'>Veniam debitis quaerat officiis quasi cupiditate quo, quisquam velit, magnam voluptatem repellendus sed eaque</p>
            </div>
            <div className='flex justify-between items-center mt-4'>
                <span>100₺</span>
                <button className='btn-primary h-10 w-10 rounded-full !p-0 grid place-content-center'><FaShoppingCart/></button>
            </div>
            </div>
            
        </div>
    
  )
}

export default MenuItem