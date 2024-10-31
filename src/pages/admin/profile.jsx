import Image from 'next/image'
import React, { use } from 'react'

import { useState } from 'react';
import Orders from '../../../components/profile/Orders';
import Product from '../../../components/admin/Product';
import Order from '../../../components/admin/Order';
import Categories from '../../../components/admin/Categories';
import Footer from '../../../components/admin/Footer';

const Profile = () => {

  const [tabs, setTabs] = useState(0);


  
  return (
    <div className="p-8 flex-1">
      
    <div className='flex px-10 min-h-[calc(100vh_-_425px)] lg:flex-row flex-col'>
      <div className='lg:w-80 w-100 flex-shrink-0'>
        <div className='relative flex flex-col items-center px-10 py-8 border border-b-0'>
          <Image src="/images/admin.png" alt='' width={100} height={100} className='rounded-full hover:border-2 hover:border-primary'/>
          <b className='text-2xl mt-1 '>Admin</b>
        </div>
        <ul className='text-center font-semibold'>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
            tabs === 0 && "bg-primary text-secondary rounded-lg"
          }`} onClick={()=> setTabs(0)}> 
            <i className='fa fa-cutlery'></i>
            <button className='ml-1'>Products</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
            tabs === 1 && "bg-primary text-secondary rounded-lg"
          }`} onClick={()=> setTabs(1)}> 
            <i className='fa fa-motorcycle'></i>
            <button className='ml-1'>Orders</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
            tabs === 2 && "bg-primary text-secondary rounded-lg"
          }`} onClick={()=> setTabs(2)}> 
            <i className='fa fa-ellipsis-h'></i>
            <button className='ml-1'>Categories</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
            tabs === 3 && "bg-primary text-secondary rounded-lg"
          }`} onClick={()=> setTabs(3)}> 
            <i className='fa fa-window-maximize'></i>
            <button className='ml-1'>Footer</button>
          </li>
          <li className={`border w-full p-3 cursor-pointer hover:bg-primary hover:text-secondary hover:rounded-lg transition-all ${
            tabs === 4 && "bg-primary text-secondary rounded-lg"
          }`} onClick={()=> setTabs(4)}> 
            <i className='fa fa-sign-out'></i>
            <button className='ml-1'>Exit</button>
          </li>
        </ul>
        </div>
        {tabs === 0 && (
          <Product/>
        )}
        {tabs === 1 && (
          <Order/>
        )}
        {tabs === 2 && (
          <Categories/>
        )}
        {tabs === 3 && (
          <Footer/>
        )}
        
      
    </div></div>
    
  )
}

export default Profile