import Image from "next/image";
import Title from "../../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../redux/cartSlice";

const Cart = () => {

  const cart= useSelector((state) => state.cart);
  const dispatch = useDispatch();

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
            {cart.products.map((product) => (

<tr className="bg-secondary border-primary" key={product.id}>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
  <Image src="/images/f1.png" width={50} height={50} alt="" />
  <span>{product.name}</span>
</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
  {product.extras.map((item) =>(
    <span key={item.id}>{item.name}, </span>
  ))}
</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">{product.price}₺</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">{product.quantity}</td>
</tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="bg-secondary min-h-[calc(100vh_-_425px)] flex flex-col justify-center text-white px-10 gap-y-7 md:w-auto w-full md:text-start text-center my-2">
        <Title addClass="text-[40px]">CART  TOTAL</Title>
        <div className="flex flex-col gap-y-2">
            <span><b>Subtotal: </b>{cart.total}₺</span>
            <span><b>Discount: </b>0₺</span>
            <span><b>Total: </b>{cart.total}₺</span>
            
        </div>
        <div>
        <button className="btn-primary mt-4 md:w-auto w-52" onClick={()=> dispatch(reset())}>CHECKOUT NOW!</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
