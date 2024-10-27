import Image from "next/image";
import Title from "../../../components/ui/Title";

const Cart = () => {
  return (
    <div className="min-h-[calc(100vh_-_425px)]">
      <div className="flex justify-between items-center md:flex-row flex-col ">
      <div className="min-h-[calc(100vh_-_425px)] flex items-center flex-1 p-10 overflow-x-auto w-full ">
        <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
            <tr>
              <th scope="col" className="py-3 px-6">PRODUCT</th>
              <th scope="col"  className="py-3 px-6">EXTRAS</th>
              <th scope="col"  className="py-3 px-6">PRICE</th>
              <th scope="col"  className="py-3 px-6">QUANTITY</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-secondary border-primary">
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
                <Image src="/images/f1.png" width={50} height={50} alt="" />
                <span>Good Pizza</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
                <span>mayonez, acı sos, ketçap</span>
              </td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">100₺</td>
              <td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">1</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-secondary min-h-[calc(100vh_-_425px)] flex flex-col justify-center text-white px-10 gap-y-7 md:w-auto w-full md:text-start text-center my-2">
        <Title addClass="text-[40px]">CART  TOTAL</Title>
        <div className="flex flex-col gap-y-2">
            <span><b>Subtotal: </b>100₺</span>
            <span><b>Discount: </b>0₺</span>
            <span><b>Total: </b>100₺</span>
            
        </div>
        <div>
        <button className="btn-primary mt-4 md:w-auto w-52">CHECKOUT NOW!</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
