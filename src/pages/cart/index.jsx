import Image from "next/image";
import Title from "../../../components/ui/Title";
import { useSelector, useDispatch } from "react-redux";
import { reset } from "../../../redux/cartSlice";
import axios from "axios";
import { useSession } from "next-auth/react";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import Link from "next/link";

const Cart = ({userList}) => {
  const {data: session} = useSession();
  const cart= useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const user = userList?.find((user) => user.email === session?.user?.email);
  const router = useRouter();

  const newOrder = {
    customer: user?.fullName,
    address: user?.address ? user?.address : "Adres Yok!",
    total: cart.total,
    method: 0,
  };

  const createOrder = async () => {
    try {
      if(session){
        if(confirm("Sipariş vermek istediğinizden emin misiniz?")) {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/orders`, newOrder);
          
          if(res.status === 201){
            router.push(`/order/${res.data._id}`);
            dispatch(reset());
          toast.success("Sipariş başarıyla oluşturuldu.", {autoClose:1000});
          }
        }
      }
      else{
        toast.error("Lütfen önce giriş yapın!", {autoClose:1000,})
      }
    } catch (err) {
      
      console.log(err)
    }
  }

  return (
    <div className="min-h-[calc(100vh_-_425px)]">
      <div className="flex justify-between items-center md:flex-row flex-col ">
      <div className="min-h-[calc(100vh_-_425px)] flex items-center flex-1 p-10 overflow-x-auto w-full ">
        <div className="max-h-52 overflow-auto w-full">
        {cart?.products?.length > 0 ? (
          <table className="w-full text-sm text-center text-gray-500 min-w-[1000px] ">
          <thead className="text-xs text-gray-400 uppercase bg-gray-800 ">
            <tr>
              <th scope="col" className="py-3 px-6">ÜRÜN</th>
              <th scope="col"  className="py-3 px-6">EKSTRA</th>
              <th scope="col"  className="py-3 px-6">FİYAT</th>
              <th scope="col"  className="py-3 px-6">MİKTAR</th>
            </tr>
          </thead>
          <tbody>
            {cart.products.map((product, index) => (

<tr className="bg-secondary border-primary" key={index}>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all flex items-center gap-x-1 justify-center">
  <Image src={(product.img)} width={50} height={50} alt="" />
  <span>{product.name}</span>
</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">
  {product.extras?.length > 0 ? (
    product.extras.map((item) =>(
      <span key={item.id}>{item.text} </span>
    ))
  ): "---"}
</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">{product.price}₺</td>
<td className="py-4 px-6 font-medium whitespace-nowrap hover:text-primary transition-all">{product.quantity}</td>
</tr>
            ))}
          </tbody>
        </table>
        ): <p className="text-center text-secondary font-semibold">Henüz hiç ürün eklemediniz.. <br />Menü için <Link className="underline" href="/menu">Tıklayınız..</Link> </p> }
        </div>
      </div>
      <div className="bg-secondary min-h-[calc(100vh_-_425px)] flex flex-col justify-center text-iwhite px-10 gap-y-7 md:w-auto w-full md:text-start text-center my-2">
        <Title addClass="text-[40px]">SEPET TOPLAMI</Title>
        <div className="flex flex-col gap-y-2">
            <span><b>Toplam: </b>{cart.total}₺</span>
            <span><b>İndirim: </b>0₺</span>
            <span><b>Genel Toplam: </b>{cart.total}₺</span>
            
        </div>
        <div>
        <button className="btn-primary my-4 md:w-auto w-52" onClick={createOrder}>ÖDEME YAP!</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async () => {
  const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/users`,{withCredentials: true,});

  return {
    props: {
      userList: res.data ? res.data : [],
    },
  };
};

export default Cart;
