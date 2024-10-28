import React from "react";
import Title from "../ui/Title";

const Orders = () => {
  return (
    <form className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Orders</Title>
      <div className="overflow-x-auto overflow-y-auto">
        <div className="mt-4 flex items-center justify-center flex-col ">
          <div className="flex items-center flex-1 w-full h-full overflow-y-auto">
            <table className="w-full text-sm text-center text-gray-500  ">
              <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
                <tr>
                  <th scope="col" className="py-3 px-6">
                    ID
                  </th>
                  <th scope="col" className="py-3 px-6">
                    ADDRESS
                  </th>
                  <th scope="col" className="py-3 px-6">
                    DATE
                  </th>
                  <th scope="col" className="py-3 px-6">
                    TOTAL
                  </th>
                  <th scope="col" className="py-3 px-6">
                    STATUS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-secondary border-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                    1234567890
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    ANKARA
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    09-11-2924
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    100₺
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    PREPARING
                  </td>
                </tr>
                <tr className="bg-secondary border-primary">
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                    1234567890
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    ANKARA
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    09-11-2924
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    100₺
                  </td>
                  <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                    PREPARING
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Orders;
