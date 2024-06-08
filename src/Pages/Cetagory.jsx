import { useState, useEffect } from "react";

const Category = () => {
  const [productTwo, setProductTwo] = useState([null]);

  useEffect(() => {
    const fetchCategoryList = async () => {
      const response = await fetch('https://dummyjson.com/products/category-list');
      const data = await response.json();
      setProductTwo(data);

    };

    fetchCategoryList();
  }, []);

  return (
    <div className="container mx-auto pt-4 pb-10">
      <h1 className="text-2xl black p-3 text-center uppercase mb-5">All Product Cetagory  </h1>
      <div >
      <ul className=" flex flex-wrap  gap-10">
        {productTwo.map((category, index) => (
          <li key={index} className="text-1xl text-black bg-gray-100 py-2 px-5 rounded">
            {category}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Category;
