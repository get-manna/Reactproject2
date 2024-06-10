import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CetagoryList from "./CetagoryList";

const SingleCategory = () => {
    const { SingleCategory } = useParams();



    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getSingleCat = async () => {
            try {
                const categoryItem = await fetch(`https://dummyjson.com/products/category/${SingleCategory}`);
                if (!categoryItem.ok) {
                    throw new Error('Failed to fetch category');
                }
                const data = await categoryItem.json();
                setCategory(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching category:', error);
                setError(error.message || 'Failed to fetch category');
                setLoading(false);
            }
        };

        getSingleCat();
    }, [SingleCategory]);

    return (
        <>
            {loading ? (
                <div className="flex h-screen justify-center items-center">
                    <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"></div>
                </div>
            ) : (
              <CetagoryList categoryProducts={category} categoryName={SingleCategory} />


            )}
        </>
    );
};

export default SingleCategory;





