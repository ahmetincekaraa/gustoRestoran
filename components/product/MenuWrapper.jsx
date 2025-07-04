import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import MenuItem from "./MenuItem";

const MenuWrapper = ({ categoryList, productList }) => {
  const [active, setActive] = useState(0);
  const [filter, setFilter] = useState([]);
  const [productLimit, setProductLimit] = useState(3);

 
  return (
    <div className="container mx-auto mb-16">
      <div className="flex flex-col items-center w-full">
        <Title addClass="text-[40px] font-lora">Menü</Title>
        <div className="mt-10">
          {categoryList &&
            categoryList.map((category, index) => (
              <button
                className={`px-6 py-2 rounded-3xl ${
                  index === active && "bg-secondary text-primary "
                }`}
                key={category._id}
                onClick={() => {
                  setActive(index);
                  setProductLimit(3);
                }}
              >
                {category.title}
              </button>
            ))}
        </div>
      </div>

      <div className="my-8 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 min-h-[400px]">
        {filter.length > 0 &&
          filter.slice(0, productLimit).map((product) => (
            <MenuItem key={product._id} product={{
              ...product,
              desc: `${product.desc.slice(0, 36)}${product.desc.length > 36 ? "..." : ""}`,
            }} />
          ))}
          
      </div>
      <div className="flex items-center justify-center my-8s">
            <button className="btn-primary" onClick={() => setProductLimit(productLimit + 3)}>Daha Fazla..</button>
          </div>
    </div>
  );
};

export default MenuWrapper;
