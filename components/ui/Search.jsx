import React, { useEffect, useState } from 'react'
import Title from "../ui/Title"
import Image from 'next/image';
import OutsideClickHandler from 'react-outside-click-handler';
import { FaRegWindowClose  } from "react-icons/fa";
import axios from 'axios';
import Input from '../form/Input';
import { useRouter } from 'next/router';
import PacmanLoader from "react-spinners/PacmanLoader";

const Search = ({setIsSearchModal}) => {

  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        setProducts(res.data);
        setFiltered(res.data.slice(0, 5))
      } catch (err) {
        console.log(err)
      }
    }
    setTimeout(() => {
      getProducts();
    }, 1500)
  }, [])
   const handleSearch = (e) => {
const searchFilter = products.filter((product) => product.title.toLowerCase().includes(e.target.value.toLowerCase())).slice(0,5);
setFiltered(searchFilter);
   }


  return (
    <div className="fixed position w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-iwhite after:absolute after:top-0 after:left-0 after:opacity-40 grid place-content-center">
        <OutsideClickHandler onOutsideClick={() => setIsSearchModal(false)}>
<div className='w-full h-full grid place-content-center'>
<div className="relative z-50 md:w-[600px] w-[370px] bg-gray-300 border-2 rounded-2xl p-10">
  <Title addClass="text-[40px] text-center mb-4">Arama</Title>
  <Input  placeholder='Aranacak Ürün..' onChange={handleSearch} />
  <div className='mt-5'>
    {products.length > 0 ? (
      <ul >
      {filtered.length > 0 ? 
      filtered.map ((product) => (
        <li className='flex items-center justify-between p-1 hover:bg-primary transition-all cursor-pointer my-1' key={product?._id} onClick={() => {router.push(`/product/${product?._id}`);
        setIsSearchModal(false)}}>
        <div className='relative flex'>
            <Image src={product?.img} alt={product?.title}
            width={50}
            height={50}
            />
        </div>
        <span className='font-bold'>{product.title}</span>
        <span className='font-bold'>{product.prices[0]}₺</span>
    </li>
      )): <p className='text-center font-semibold'>Ürün Bulunamadı..</p>}
      
  </ul>
    ) : (
      <div className='flex justify-center items-center mt-5'>
        <PacmanLoader color='#009467'/>
      </div>
    )}
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