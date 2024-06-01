import { useState, useEffect } from "react";
import Producttwo from "./Component/Producttwo";

// const productlist = [
//   {
//     id: 1,
//     name: 'name 1',
//     price: 100,
//     category: 'category 1',
//     tag: 'Tag 1'
//   },
//   {
//     id: 2,
//     name: 'name 2',
//     price: 200,
//     category: 'category 2',
//     tag: 'Tag 2'
//   },
//   {
//     id: 3,
//     name: 'name 3',
//     price: 100,
//     category: 'category 3',
//     tag: 'Tag 3'
//   },
// ];

const App = () => {
  const [Producttwo, Setproducttwo] = useState({});


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      Setproducttwo(data);
    };

    fetchProducts();
  },[Producttwo]);





  return (
    <div className="max-w-[1440px] my-8">
      <h1 className="text-2xl text-center mb-5">Product List</h1>
    
      {
        Producttwo.length  ? (
          <Producttwo products={Producttwo} /> 
        ) : (
          <p>Loading  product ...</p>
        )
      }
    </div>
  );
  

}

export default App;
















