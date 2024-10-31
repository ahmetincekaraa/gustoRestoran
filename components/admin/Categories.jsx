import { useState } from "react";
import Title from "../ui/Title";
import Input from "../form/Input";

const Categories = () => {
  const [inputText, setInputText] = useState("");
  const [categories, setCategories] = useState([]);

  return (
    <div className="p-8 flex-1">
      <Title addClass="text-[40px] text-center">Categories</Title>
      <div className="mt-5">
        <div className="flex gap-4 flex-1 items-center">
          <Input
            placeholder="Add a new Category..."
            onChange={(e) => setInputText(e.target.value)}
            value={inputText}
          />
          <button
            className="btn-primary hover:text-secondary"
            onClick={() => {
              setCategories([...categories, inputText]);
              setInputText("");
            }}
          >
            ADD
          </button>
        </div>
        <div className="mt-10">
          {categories.map((category, index) => (
            <div className="flex justify-between mt-4" key={index}>
              <b className="text-lg">{category}</b>
              <button
                className="btn-primary !bg-danger hover:text-primary"
                onClick={() =>
                  setCategories(categories.filter((cat) => cat !== category))
                }
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
