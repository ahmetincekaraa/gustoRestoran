import React from 'react'
import Title from '../../../components/ui/Title'
import Image from 'next/image'

const Order = () => {
  return (
    <div className='overflow-x-auto'>
      <div className="min-h-[calc(100vh_-_425px)] flex items-center justify-center flex-col p-10 min-w-[1000px]">
      <div className="flex items-center flex-1 w-full max-h-28 ">
        <table className="w-full text-sm text-center text-gray-500  ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
            <tr>
              <th scope="col" className="py-3 px-6">ORDER ID</th>
              <th scope="col"  className="py-3 px-6">CUSTOMER</th>
              <th scope="col"  className="py-3 px-6">ADDRESS</th>
              <th scope="col"  className="py-3 px-6">TOTAL</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-primary">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                1234567890
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                AHMET İNCEKARA
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">ANKARA</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">100₺</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-between w-full p-10 bg-primary mt-6'>
        <div className='relative flex flex-col'>
            <Image src="/images/paid.png" alt='' width={40} height={40} objectFit='contain'/>
            <span>Payment</span>
        </div>
        <div className='relative flex flex-col animate-pulse'>
            <Image src="/images/bake.png" alt='' width={40} height={40} objectFit='contain'/>
            <span>Preparing</span>
        </div>
        <div className='relative flex flex-col'>
            <Image src="/images/bike.png" alt='' width={40} height={40} objectFit='contain'/>
            <span>On The Way</span>
        </div>
        <div className='relative flex flex-col'>
            <Image src="/images/delivered.png" alt='' width={40} height={40} objectFit='contain'/>
            <span>Delivered</span>
        </div>
      </div>
      </div>
      </div>
  )
}

export default Order