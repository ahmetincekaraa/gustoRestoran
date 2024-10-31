import React from 'react'
import Title from '../ui/Title'
import Image from 'next/image'

const Product = () => {
  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Product</Title>
      <div className="overflow-x-auto overflow-y-auto">
        <div className="mt-4 flex items-center justify-center flex-col ">
          <div className="flex items-center flex-1 w-full h-full overflow-y-auto">
            <table className="w-full text-sm text-center text-gray-500  ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    IMAGE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TITLE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    PRICE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary border-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                    <Image src="/images/f1.png" alt='' width={50} height={50}/>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    1234567890
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    Good Pizza
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    100₺
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    <button className='btn-primary hover:text-primary !bg-danger'>DELETE</button>
                  </td>
                </tr>
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product