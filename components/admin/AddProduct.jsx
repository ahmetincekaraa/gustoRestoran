import React, { useEffect, useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";
import OutsideClickHandler from "react-outside-click-handler";
import { FaRegWindowClose } from "react-icons/fa";
import axios from "axios";
import { toast } from "react-toastify";

const AddProduct = ({ setIsProductModal }) => {
  const [file, setFile] = useState();
  const [imageSrc, setImageSrc] = useState();

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [prices, setPrices] = useState([]);

  const [extra, setExtra] = useState("");
  const [extraOptions, setExtraOptions] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`);
        setCategories(res.data);
      } catch (err) {
        console.log(err)
      }
    };
    getProducts();
  }, [])
  
  const handleExtra = (e) => {
    if (extra) {
      if (extra.text && extra.price) {
        setExtraOptions((prev) => [...prev, extra]);
      }
    }
  };

  const changePrice = (e, index) => {
    const currentPrices = prices;
    currentPrices[index] = e.target.value;
    setPrices(currentPrices);
  };

  const handleOnChange = (changeEvent) => {
    const reader = new FileReader();
    reader.onload = function (onLoadEvent) {
      setImageSrc(onLoadEvent.target.result);
      setFile(changeEvent.target.files[0]);
    };

    reader.readAsDataURL(changeEvent.target.files[0]);
  };

  const handleCreate = async () => {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "food-ordering");

    try {
      const uploadRes = await axios.post(
        "https://api.cloudinary.com/v1_1/dlbvz7ghp/image/upload",
        data
      );
      const { url } = uploadRes.data;
      const newProduct = {
        img: url,
        title,
        desc,
        category: category.toLowerCase(),
        prices,
        extraOptions,
      };

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/products`,newProduct);

      if (res.status === 201) {
        setIsProductModal(false);
        toast.success("Product created successfully!")
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="fixed position w-screen h-screen z-50 top-0 left-0 after:content-[''] after:w-screen after:h-screen after:bg-white after:absolute after:top-0 after:left-0 after:opacity-40 grid place-content-center">
      <OutsideClickHandler onOutsideClick={() => setIsProductModal(false)}>
        <div className="w-full h-full grid place-content-center">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-gray-300 border-2 rounded-2xl p-10">
            <Title addClass="text-[40px] text-center">Add a New Product</Title>
            <div>
              <div className="flex flex-col text-sm mt-6">
                <label className="flex gap-2 items-center justify-between">
                  <input
                    type="file"
                    onChange={(e) => handleOnChange(e)}
                    className="hidden"
                  />
                  <button className="btn-primary !rounded-none !bg-blue-600 pointer-events-none">
                    Choose an Image
                  </button>

                  {imageSrc && (
                    <div>
                      {/*eslint-disable-next-line @next/next/no-img-element*/}
                      <img
                        src={imageSrc}
                        alt=""
                        className="w-20 h-20 rounded-full my-2"
                      />
                    </div>
                  )}
                </label>
              </div>
              <div className="flex flex-col text-sm mt-4">
                <span className="font-semibold mb-0.5">Title</span>
                <input
                  type="text"
                  className="border h-8 text-sm px-1 outline-none"
                  placeholder="Write a Title"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-sm mt-4">
                <span className="font-semibold mb-0.5">Description</span>
                <textarea
                  className="border h-8 text-sm px-1 outline-none pt-1"
                  placeholder="Write a Description"
                  onChange={(e) => setDesc(e.target.value)}
                />
              </div>
              <div className="flex flex-col text-sm mt-4">
                <span className="font-semibold mb-0.5">Select Category</span>
                <select
                  className="border h-8 text-sm px-2 outline-none"
                  placeholder="Write a Title"
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.length > 0 && categories.map((category) => (
                    <option value={category.title.toLowerCase()} key={category._id}>{category.title}</option>
                  ))}
                  
                  
                </select>
              </div>
              <div className="flex flex-col text-sm mt-4">
                <span className="font-semibold mb-2">Prices</span>
                {category === "pizza" ? (
                  <div className="flex gap-1 justify-between md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 h-8 text-sm px-1 outline-none"
                    placeholder="Small"
                    onChange={(e) => changePrice(e, 0)}
                  />
                  <input
                    type="number"
                    className="border-b-2 h-8 text-sm px-1 outline-none"
                    placeholder="Medium"
                    onChange={(e) => changePrice(e, 1)}
                  />
                  <input
                    type="number"
                    className="border-b-2 h-8 text-sm px-1 outline-none"
                    placeholder="Large"
                    onChange={(e) => changePrice(e, 2)}
                  />
                </div>
                ): (
                  <div className="flex gap-1 justify-between md:flex-nowrap flex-wrap">
                  <input
                    type="number"
                    className="border-b-2 h-8 text-sm px-1 outline-none w-full"
                    placeholder="Standart"
                    onChange={(e) => changePrice(e, 0)}
                  />
                </div>
                )}
              </div>

              <div className="flex flex-col text-sm mt-4">
                <span className="font-semibold mb-2">Extra</span>
                <div className="flex gap-1 md:flex-nowrap flex-wrap">
                  <input
                    type="text"
                    className="border-b-2 h-8 text-sm px-1 outline-none"
                    placeholder="Item"
                    name="text"
                    onChange={(e) =>
                      setExtra({ ...extra, [e.target.name]: e.target.value })
                    }
                  />
                  <input
                    type="number"
                    className="border-b-2 h-8 text-sm px-1 outline-none"
                    placeholder="Prices"
                    name="price"
                    onChange={(e) =>
                      setExtra({ ...extra, [e.target.name]: e.target.value })
                    }
                  />
                  <button
                    className="btn-primary ml-auto !text-secondary"
                    onClick={handleExtra}
                  >
                    Add
                  </button>
                </div>
                <div className="mt-2 flex gap-2">
                  {extraOptions.map((item, index) => (
                    <span
                      className="inline-block border border-orange-600 text-orange-500  p-1 rounded-xl text-xs cursor-pointer"
                      key={index}
                      onClick={() => {
                        setExtraOptions(
                          extraOptions.filter((_, i) => i !== index)
                        );
                      }}
                    >
                      {item.text}
                    </span>
                  ))}
                </div>
              </div>
              <button
                onClick={handleCreate}
                className="btn-primary !bg-success  mt-3 text-xl font-semibold w-full"
              >
                Create Add Product
              </button>

              <button
                onClick={() => setIsProductModal(false)}
                className="absolute top-4 right-4"
              >
                <FaRegWindowClose
                  size={20}
                  className=" hover:text-red-700 transition-all"
                />
              </button>
            </div>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
};

export default AddProduct;
