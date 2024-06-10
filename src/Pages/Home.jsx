import { useState, useEffect } from "react";
import ProductList from "../Component/ProductList";


const Home = () => {
  const [Producttwo, Setproducttwo] = useState(null);

  const [count, setCount] = useState(0);


  useEffect(() => {
    const fetchProducts = async () => {
     
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      Setproducttwo(data);


      setCount(count +1)

    };
    

    fetchProducts();
    
  },[count]);


  return (
    <div className="max-w-[1440px] my-8 pt-5">
     

     {
        Producttwo  ? (
          <ProductList products={Producttwo} />

        ) : (
          <div className="flex h-screen justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"> </div>
        </div>
        )
      }
    </div>



  );
  

}

export default Home;



















