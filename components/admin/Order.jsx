import React, { useEffect, useState } from 'react'
import Title from '../ui/Title'
import axios from 'axios'

const Order = () => {
  const [orders, setOrders] = useState([])

  const status = ["Hazırlanıyor..", "Yolda..", "Teslim Edildi."];
  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
        setOrders(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    getOrders();
    
  }, []);
  
  const handleStatus = async (id) => {
    const item = orders.find((order) => order._id === id);
    const currentStatus = item.status;

    try {
      const res = await axios.put(`${process.env.NEXT_PUBLIC_API_URL}/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrders([res.data, ...orders.filter((order) => order._id !== id)])
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Siparişler</Title>
      <div className="overflow-x-auto overflow-y-auto">
        <div className="mt-4 flex items-center justify-center flex-col ">
          <div className="flex items-center flex-1 w-full h-full overflow-y-auto">
            <table className="w-full text-sm text-center text-gray-500  ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
                <tr>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                    ÜRÜN
                  </th>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                    MÜŞTERİ
                  </th>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                    TOPLAM
                  </th>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                  ÖDEME
                  </th>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                    DURUM
                  </th>
                  <th scope="col" className="py-3 px-6 text-primary hover:text-ired">
                    AKSİYON
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.length > 0 && orders.sort((a,b)=> 
                  new Date(b.createdAt) - new Date(a.createdAt)
                ).map((order) => (
                  <tr className="bg-secondary border-primary" key={order._id}>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all gap-x-1 ">
                  {order?._id.substring(0, 6)}...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.customer}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.total}₺  
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.method === 0 ? "Cash" : "Card"}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {status[order?.status]}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    <button className='btn-primary hover:text-primary !bg-success' onClick={() => handleStatus(order?._id)} disabled={order?.status > 1}>Sıradaki Durum</button>
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

export default Order