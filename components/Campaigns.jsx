import React from 'react'
import Image from 'next/image'
import Title from './ui/Title';
import { FaShoppingCart } from "react-icons/fa";


const CampaignsItem1 = () => {
    return (
        <div className='bg-[#004A7C] flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
            <div className='relative md:w-44 md:h-32 w-48 h-36 after:content-[""] rounded overflow-hidden'>
                
                <Image src="/images/c1.png" alt='' fill className='hover:scale-110 transition-all duration-300' objectFit='cover' priority/>
                </div>
                <div className='text-iwhite'>
                    <Title addClass="text-2xl">Basit Kullanım</Title>
                    <div className='font-Lora my-1'>
                        <span className='text-lg'>Kolay ve Profesyonel İşlemler</span>
                    </div>
                    
                </div>
        </div>
    )
}
const CampaignsItem2 = () => {
    return (
        <div className='bg-[#004A7C] flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
            <div className='relative md:w-44 md:h-32 w-48 h-36 after:content-[""] rounded overflow-hidden'>
                
                <Image src="/images/c2.png" alt='' fill className='hover:scale-110 transition-all duration-300' objectFit='cover' priority/>
                </div>
                <div className='text-iwhite'>
                    <Title addClass="text-2xl">Finans Takibi</Title>
                    <div className='font-Lora my-1'>
                        <span className='text-lg'>Harcamalarınızın Takibini Yapın</span>
                    </div>
                    
                </div>
        </div>
    )
}

const CampaignsItem3 = () => {
    return (
        <div className='bg-[#004A7C] flex-1 rounded-md py-5 px-[15px] flex items-center gap-x-4'>
            <div className='relative md:w-44 md:h-32 w-48 h-36 after:content-[""] rounded overflow-hidden'>
                <Image src="/images/c3...png" alt='' fill className='hover:scale-110 transition-all duration-300' objectFit='cover' priority/>
                </div>
                <div className='text-iwhite'>
                    <Title addClass="text-2xl">Bütçenizi Büyütün</Title>
                    <div className='font-Lora my-1'>
                        <span className='text-lg'>Mantıklı Yatırımlar ve Birikimlerle Bütçenizi Genişletin</span>
                    </div>
                    
                </div>
        </div>
    )
}

const Campaigns = () => {
  return (
    <div className='flex justify-between container mx-auto pb-20 gap-6 flex-wrap'>
        <CampaignsItem1/>
        <CampaignsItem2/>
        <CampaignsItem3/>
    </div>
  )
}

export default Campaigns