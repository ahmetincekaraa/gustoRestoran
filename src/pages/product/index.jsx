import Title from '../../../components/ui/Title'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <div className='flex items-center h-screen gap-20 py-20 flex-wrap'>
       <div className='md:flex-1 relative w-4/5 h-4/5 mx-20'>
        <Image src="/images/f1.png" alt='' layout='fill' objectFit='contain'/>
       </div>
       <div className='md:flex-1 md:text-start text-center'>
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className='text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4'>100₺</span>
        <p className='text-sm my-4 md:pr-24'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum, mollitia non. Modi quo corporis velit dolore perspiciatis reprehenderit, maiores nulla minima voluptatibus dignissimos possimus itaque natus praesentium eum, hic facilis.</p>
        <div>
            <h4 className='text-xl font-bold'>Choose the size</h4>
            <div className='flex items-center gap-x-20 md:justify-start justify-center'>
            <div className='relative w-9 h-9'>
            <Image src="/images/f1.png" alt='' layout='fill'/>
            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-1 font-medium'>Small</span>
            </div>
            <div className='relative w-12 h-12'>
            <Image src="/images/f1.png" alt='' layout='fill'/>
            <span className='absolute top-0 -right-6 text-xs bg-primary rounded-full px-1 font-medium'>Medium</span>
            </div>
            <div className='relative w-16 h-16'>
            <Image src="/images/f1.png" alt='' layout='fill'/>
            <span className='absolute top-0 -right-3 text-xs bg-primary rounded-full px-1 font-medium'>Large</span>
            </div>
            </div>
            <div className='flex gap-x-4 my-6 md:justify-start justify-center md:pr-20'>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Ketçap</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Ketçap</span>
                </label>
                <label className='flex items-center gap-x-1'>
                    <input type="checkbox" className='w-5 h-5 accent-primary' />
                    <span className='text-sm font-semibold'>Ketçap</span>
                </label>
            </div>
            <button className='btn-primary'>Add to Card</button>
        </div>
       </div>
    </div>
  )
}

export default page