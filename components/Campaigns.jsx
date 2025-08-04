import React from 'react'
import Image from 'next/image'
import Title from './ui/Title';
import { FaShoppingCart } from "react-icons/fa";


const CampaignsItem1 = () => {
    return (
        <div className='bg-[#01281f] flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
            <div className='relative md:w-44 md:h-44 w-36 h-36 after:content-[""]  border-[5px] border-primary rounded-full overflow-hidden'>
                <Image src="/images/k1.jpg" alt='' layout='fill' className='hover:scale-110 transition-all duration-300' objectFit='cover' priority/>
                </div>
                <div className='text-iwhite'>
                    <Title addClass="text-2xl">Pizza Çeşitlerinde</Title>
                    <div className='font-Lora my-1'>
                        <span className='text-[40px] '>15% </span>
                        <span className='text-lg'>İndirim</span>
                    </div>
                    <a href="menu">
                    <button className='btn-primary flex items-center gap-x-2 !text-iwhite'> Sipariş<FaShoppingCart size={20}/></button>
                    </a>
                </div>
        </div>
    )
}
const CampaignsItem2 = () => {
    return (
        <div className='bg-[#01281f] flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4 '>
            <div className='relative md:w-44 md:h-44 w-36 h-36 after:content-[""]  border-[5px] border-primary rounded-full overflow-hidden'>
                <Image src="/images/k2.jpg" alt='' layout='fill' className='hover:scale-110 transition-all duration-300' objectFit='cover' priority/>
                </div>
                <div className='text-iwhite'>
                    <Title addClass="text-2xl">Salata Çeşitlerinde</Title>
                    <div className='font-Lora my-1'>
                        <span className='text-[40px] '>10% </span>
                        <span className='text-lg'>İndirim</span>
                    </div>
                    <a href="menu">
                    <button className='btn-primary flex items-center gap-x-2 !text-iwhite'> Sipariş <FaShoppingCart size={20}/></button>
                    </a>
                    
                </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto pb-20 gap-6 flex-wrap'>
        <CampaignsItem1/>
        <CampaignsItem2/>
    </div>
  )
}

export default Campaigns