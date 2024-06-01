import { useState, useEffect } from "react";
import ProductList from "./Component/ProductList";


const App = () => {
  const [Producttwo, Setproducttwo] = useState(null);


  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      Setproducttwo(data);
    };

    fetchProducts();
    
  },[]);


console.log(Producttwo);


  return (
    <div className="max-w-[1440px] my-8">
      <h1 className=" text-center text-blue-500 uppercase text-3xl mb-5">Product List</h1>
    
      {
        Producttwo  ? (
          <ProductList products={Producttwo} />
          // <p>test</p> 
        ) : (
          <p className="text-bold uppercase text-2xl">Loading  product ...</p>
        )
      }
    </div>
  );
  

}

export default App;
















