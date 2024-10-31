import React from 'react'
import Title from '../ui/Title'

const Order = () => {
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
                    PRODUCT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    CUSTOMER
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TOTAL
                  </th>
                  <th scope="col" className="py-3 px-6">
                    PAYMENT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    STATUS
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ACTION
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary border-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all gap-x-1 ">
                  12345...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  Ahmet İncekara
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  100₺  
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  Cash
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  Preparing
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    <button className='btn-primary hover:text-primary !bg-success'>Next Stage</button>
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

export default Order