import React from "react";
import Image from "next/image";
import axios from "axios";

const Order = ({ order }) => {
  const status = order?.status
  const statusClass = (index) => {
    if(index - status < 1) return "";
    if(index - status === 1) return "animate-pulse";
    if(index - status > 1) return "";
  }
  return (
    <div className="overflow-x-auto">
      <div className="min-h-[calc(100vh_-_425px)] flex items-center justify-center flex-col p-10 min-w-[1000px]">
        <div className="flex items-center flex-1 w-full max-h-28 ">
          <table className="w-full text-sm text-center text-gray-500  ">
            <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
              <tr>
                <th scope="col" className="py-3 px-6">
                  SİPARİŞ ID
                </th>
                <th scope="col" className="py-3 px-6">
                  MÜŞTERİ
                </th>
                <th scope="col" className="py-3 px-6">
                  ADRES
                </th>
                <th scope="col" className="py-3 px-6">
                  TOPLAM
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-secondary border-primary">
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                  {order?._id.substring(0, 6)}...
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.customer}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.address}
                </td>
                <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                  {order?.total}₺
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex justify-between w-full p-10 bg-primary mt-6">
          <div className={`relative flex flex-col items-center ${statusClass(0)}`}>
            <Image
              src="/images/paid.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Ödeme</span>
          </div>
          <div className={`relative flex flex-col items-center ${statusClass(1)}`}>
            <Image
              src="/images/bake.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Hazırlanıyor..</span>
          </div>
          <div className={`relative flex flex-col items-center ${statusClass(2)}`}>
            <Image
              src="/images/bike.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Yolda...</span>
          </div>
          <div className={`relative flex flex-col items-center ${statusClass(3)}`}>
            <Image
              src="/images/delivered.png"
              alt=""
              width={40}
              height={40}
              objectFit="contain"
            />
            <span>Teslim Edildi.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${params.id}`
  );
  return {
    props: {
      order: res.data ? res.data : null,
    },
  };
};

export default Order;
