import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import { useSession } from "next-auth/react";
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [currentUsers, setCurrentUsers] = useState([]);
  const {data: session} = useSession();

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/orders`);
        setOrders(res.data.filter((order) => order.customer === currentUsers?.fullName));
      } catch (err) {
        console.log(err)
      }
    }
    getOrders();
    
  }, [currentUsers]);

  const status = ["Hazırlanıyor..", "Yolda..", "Teslim Edildi."];

  useEffect(() => {
    const getUsers = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`);
        setCurrentUsers(res.data.filter((user) => user.email === session.user.email)[0]);
      } catch (err) {
        console.log(err)
      }
    }
    getUsers();
    
  }, [session]);

  return (
    <form className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Siparişler</Title>
      <div className="overflow-x-auto overflow-y-auto">
        <div className="mt-4 flex items-center justify-center flex-col ">
          <div className="flex items-center flex-1 w-full h-full overflow-y-auto">
            <table className="w-full text-sm text-center text-gray-500 ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ADRES
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TARİH
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TOPLAM
                  </th>
                  <th scope="col" className="py-3 px-6">
                    DURUM
                  </th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr className="bg-secondary border-primary" key={order?._id}>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                    {order?._id.slice(0,5)}...
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {order?.address}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {order?.createdAt.slice(0,10)}
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {order?.total}₺
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    {status[order?.status]}
                  </td>
                </tr>
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Orders;
