import { useState, useEffect } from "react";
import Producttwo from "./Component/Producttwo";

const productlist = [
  {
    id: 1,
    name: 'name 1',
    price: 100,
    category: 'category 1',
    tag: 'Tag 1'
  },
  {
    id: 2,
    name: 'name 2',
    price: 200,
    category: 'category 2',
    tag: 'Tag 2'
  },
  {
    id: 3,
    name: 'name 3',
    price: 100,
    category: 'category 3',
    tag: 'Tag 3'
  },
];

const App = () => {
  const [products, setProducts] = useState(productlist);

  return (
    <div className="max-w-[1420px] my-8">
      <h2 className="text-2xl font-bold text-blue-600 uppercase text-center mb-5">Product List</h2>
      <Producttwo products={products} />
    </div>
  );
}

export default App;
