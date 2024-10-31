import Title from "../../../components/ui/Title";
import Image from "next/image";
import { useState } from "react";
import { addProduct } from "../../../redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";

const itemsExtra = [
  {
    id: 1,
    name: "Extra 1",
    price: 5,
  },
  {
    id: 2,
    name: "Extra 2",
    price: 5,
  },
  {
    id: 3,
    name: "Extra 3",
    price: 5,
  },
];

const foodItems = [
  {id: 1,
  name: "Pizza1",
price: 100,
desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque rerum nulla laudantium nemo fugiat voluptatibus quia id accusantium nam blanditiis atque aut maiores eaque aliquid veniam rem, suscipit minima obcaecati.",
extraOptions: [
  {
    id:1,
    name: "Extra1",
    price: 1,
  }
]
}
]

const Index = () => {
  const [prices, setPrices] = useState([100, 200, 300]);
  const [price, setPrice] = useState(prices[0]);
  const [size, setSize] = useState(0);
  const [extraItems, setExtraItems] = useState(itemsExtra);
  const [extras, setExtras] = useState([]);
  const cart = useSelector ((state) => state.cart);

const dispatch = useDispatch();
  
  



  const handleSize = (sizeIndex) => {
    const difference = prices[sizeIndex] - prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const changePrice = (number) => {
    setPrice(price + number);
  };

  const handleChange = (e, item) => {
    const checked = e.target.checked;
    if (checked) {
      setExtras([...extras, item]);
      changePrice(item.price);
    } else {
      changePrice(-item.price);
      setExtras(extras.filter((extra) => extra.id !== item.id));
    }
  };

  const handleClick = () => {
    dispatch(addProduct({...foodItems[0], extras, price, quantity:1,}))
  }


  console.log(cart);

  return (
    <div className="flex items-center md:h-[calc(100vh_-_88px)] gap-5 py-20 flex-wrap">
      <div className="md:flex-1 relative md:w-4/5 md:h-4/5 w-36 h-36 mx-auto">
        <Image src="/images/f1.png" alt="" layout="fill" objectFit="contain" />
      </div>
      <div className="md:flex-1 md:text-start text-center">
        <Title addClass="text-6xl">Good Pizza</Title>
        <span className="text-primary text-2xl font-bold underline underline-offset-1 inline-block my-4">
          {price}₺
        </span>
        <p className="text-sm my-4 md:pr-24">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum,
          mollitia non. Modi quo corporis velit dolore perspiciatis
          reprehenderit, maiores nulla minima voluptatibus dignissimos possimus
          itaque natus praesentium eum, hic facilis.
        </p>
        <div>
          <h4 className="text-xl font-bold">Choose the size</h4>
          <div className="flex items-center gap-x-20 md:justify-start justify-center">
            <div
              className="relative w-9 h-9 cursor-pointer"
              onClick={() => handleSize(0)}
            >
              <Image src="/images/f1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-1 font-medium">
                Small
              </span>
            </div>
            <div
              className="relative w-12 h-12  cursor-pointer"
              onClick={() => handleSize(1)}
            >
              <Image src="/images/f1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-6 text-xs bg-primary rounded-full px-1 font-medium">
                Medium
              </span>
            </div>
            <div
              className="relative w-16 h-16  cursor-pointer"
              onClick={() => handleSize(2)}
            >
              <Image src="/images/f1.png" alt="" layout="fill" />
              <span className="absolute top-0 -right-3 text-xs bg-primary rounded-full px-1 font-medium">
                Large
              </span>
            </div>
          </div>
          <div className="flex gap-x-4 my-6 md:justify-start justify-center md:pr-20">
            {extraItems.map((item) => (
              <label className="flex items-center gap-x-1" key={item.id}>
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-primary"
                  onChange={(e) => handleChange(e, item)}
                />
                <span className="text-sm font-semibold">{item.name}</span>
              </label>
            ))}
          </div>
          <button className="btn-primary" onClick={handleClick}>Add to Card</button>
        </div>
      </div>
    </div>
  );
};

export default Index;
