import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleProduct = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://dummyjson.com/products/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch product');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product:', error);
                setProduct(null);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) {
        return (
            <div className="flex h-screen justify-center items-center">
                <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-20 w-20"> </div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="flex h-screen justify-center items-center">
                <p>Failed to load product</p>
            </div>
        );
    }

    return (
        <div className="py-16 text-center justify-center items-center ">
            <h1 className="text-blue-500 text-4xl capitalize font-bold text-center">Single Product</h1>
            <div className="t items-center justify-center">
                <div className="flex justify-between items-center w-[85%]">
                    <div className="w-[40%] border border-spacing-3">

                        <img className="border" src={product.images[0]} alt={product.title} />


                        <h2 className="font-bold text-2xl pt-5">{product.title}</h2>
                        <p className="text-2xl">Price: ${product.price}</p>
                        <p className="text-2xl">Category: {product.category}</p>
                        <button className="px-5 py-3 rounded w-full text-white bg-blue-500 mt-3 uppercase">Add to Cart</button>
                    </div>
                    <div className="w-[40%]">
                        {/* Add any additional content or images */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
