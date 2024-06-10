import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Category = () => {

    const [allCategory, setAllCategory] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const categoryItem = async  ()=> {
        const tenda = await fetch('https://dummyjson.com/products/categories');
        const categoryData = await tenda.json();
        setAllCategory(categoryData)
        setLoading(false)
      };
      categoryItem();
    },[]);



  return ( 
    <>
    {loading ? (
      
         <div className="flex h-screen justify-center items-center">
          <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"> </div>
        </div>) 
        : (
      
      <div>
        
      <div className="grid grid-cols-4 gap-5 p-10">
        
        {allCategory && allCategory.map((item, index) => (
          
          <Link key={index} to={`/all-category/${item.slug}`}>
            <div className="bg-gray-50 p-3 align-middle justify-center w-50" >
            <h2 className="text-1xl text-blue-500">{item.name}</h2>
          </div></Link> 

        ) ) }

      </div>
      </div>
    )}
    </>
  )
}

export default Category;