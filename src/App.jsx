import { useState, useEffect } from "react";
import ProductList from "./Component/ProductList";


const App = () => {
  const [Producttwo, Setproducttwo] = useState(null);

  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {

    };

    fetchProducts();
    
  },[count]);



const fatchproduct = async () => {
  setTimeout(async  () => {

      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      Setproducttwo(data);


      setCount(count +1)

  }, 500);
}




  return (
    <div className="max-w-[1440px] my-8">
      <h1 className=" text-center text-blue-500 uppercase text-3xl mb-5">Product List</h1>
      <button className="text-2xl font-bold text-blue-500 mb-5 uppercase" onClick={fatchproduct}> View all product </button>
z      {
        Producttwo  ? (
          <ProductList products={Producttwo} />

        ) : (
          <p className="text-bold uppercase text-2xl">Loading  product ...</p>
        )
      }
    </div>
  );
  

}

export default App;
















