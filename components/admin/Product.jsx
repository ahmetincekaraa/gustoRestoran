import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import Image from 'next/image'
import axios from 'axios';
import { toast } from 'react-toastify';

const Product = () => {
  
  const [products, setProducts] = useState([]);

  const handleDelete = async (id) => {
    try {
      if (confirm("Bu ürünü silmek istediğinizden emin misiniz?")) {
        const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);
        if(res.status === 200) {
          toast.success("Ürün Silindi!", { autoClose: 2000 });
          getProducts();
      };
      }
    } catch (err) {
      console.log(err)
    }
  }
  const getProducts = async () => {
    try {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
      setProducts(res.data);
    } catch (err) {
      console.log(err)
    }
  };
  useEffect(() => {
    
    getProducts();
  }, []);
  
  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Ürünler</Title>
      <div className="overflow-x-auto overflow-y-auto">
        <div className="mt-4 flex items-center justify-center flex-col ">
          <div className="flex items-center flex-1 w-full h-full overflow-auto max-h-96">
            <table className="w-full text-sm text-center text-gray-500 ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    FOTOĞRAF
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    BAŞLIK
                  </th>
                  <th scope="col" className="py-3 px-6">
                    FİYAT
                  </th>
                  <th scope="col" className="py-3 px-6">
                    AKSİYON
                  </th>
                </tr>
              </thead>
              <tbody>
                {products.length > 0 && products.map((product) => (
                  <tr className="bg-secondary border-primary" key={product._id}>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                    <Image src={(product.img)} alt={product.title} width={50} height={50}/>
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {product._id.substring(0, 5)}...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {product.title}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {product.prices[0]}₺
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    <button className='btn-primary hover:text-primary !bg-danger' onClick={() => handleDelete(product._id)}>SİL</button>
                  </td>
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product