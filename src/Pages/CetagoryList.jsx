import React from 'react';
import { Link } from "react-router-dom";

const CategoryList = ({ categoryProducts, categoryName }) => {

  const items = categoryProducts || { products: [] };

  return (
    <>
      <div>
        <h2 className="py-5 text-center font-bold text-black text-3xl capitalize">{categoryName}</h2>
      </div>
      <div className="grid grid-cols-3 gap-10 w-full px-6 py-10">
        {items.products.map((product) => (
          <div className="border flex flex-col rounded py-6 px-6" key={product.id}>
            <h3 className="text-black text-center text-3xl font-bold font-serif capitalize py-4">{product.title}</h3>
            <div className="image w-full m-auto flex justify-center">
              <img className="rounded max-w-[40%]" src={product.images[0]} alt="Product Image" />
            </div>
            <div className="gap-3">
              <div className="flex justify-between p-2 text-blue-500">
                <h2 className="text-start text-1xl">Brand: {product.brand}</h2>
                <h2 className="text-start text-1xl">Price: {product.price}</h2>
              </div>
              <hr />
              <div className="flex justify-between p-2 text-blue-500">
                <h2 className="text-start text-1xl">Warranty: {product.warrantyInformation}</h2>
                <h2 className="text-start text-1xl">Overall Rating: {product.rating}</h2>
              </div>
              <div className="mt-6 mb-5 text-center justify-center">
                <Link to={`/products/${product.id}`}>
                  <button className='bg-blue-500 text-white p-4 rounded uppercase'>Add To Cart</button>
                </Link>
              </div>  
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default CategoryList;
