import Image from "next/image";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const MenuItem = ({ product }) => {
  // Eklediğimiz ürünün order butonu disabled etmek için...
  // const cart = useSelector((state) => state.cart);
  // const findCart = cart.products.find((item) => item?._id === product?._id)

  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(
      addProduct({
        ...product,
        extras: [{ text: "---" }],
        price: product.prices[0],
        quantity: 1,
      })
    );
  };
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full bg-white h-52 grid place-content-center rounded-bl-[46px]">
        <Link href={`/product/${product._id}`}>
          <div className="relative md:w-36 md:h-36 w-36 h-36 ">
            <Image
              src={product.img}
              alt=""
              layout="fill"
              className="hover:scale-110 transition-all duration-300"
              priority
            />
          </div>
        </Link>
      </div>
      i
      <div className="p-6 text-iwhite items-center">
        <div>
          <h4 className="text-xl font-semibold">{product.title}</h4>
          <p className="text-sm">{product.desc}</p>
        </div>
        <div className="flex justify-between items-center mt-4">
          <span>{product.prices[0]} ₺</span>
          <button
            className="btn-primary h-10 w-10 rounded-full !p-0 grid place-content-center"
            onClick={handleClick}
          >
            <FaShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
