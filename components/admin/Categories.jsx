import { useEffect, useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";
import axios from "axios";

const Categories = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/categories`
        );
        setCategories(res?.data);
      } catch (err) {
        console.log(err);
      }
    };
    getCategories();
  }, []);

  const handleCreate = async (e) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/categories`,
        { title: inputText }
      );
      setCategories([...categories, res?.data]);
      setInputText("");
    } catch (err) {
      console.log(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      if(confirm("Are you sure you want to delete this category?")){
        await axios.delete(`${process.env.NEXT_PUBLIC_API_URL}/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
      }
      
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Categories</Title>
      <div className="mt-5 ">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary hover:text-secondary"
            onClick={handleCreate}
          >
            ADD
          </button>
        </div>
        <div className="mt-10 max-h-64 overflow-auto p-4">
          {categories.map((category) => (
            <div className="flex justify-between mt-4" key={category._id}>
              <b className="text-lg">{category.title}</b>
              <button
                className="btn-primary !bg-danger hover:text-primary"
                onClick={() => handleDelete(category._id)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
