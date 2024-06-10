import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Productone from '../Component/Productone';

const ProductList = ({ products }) => {
    console.log(products);

    return (
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {products.products.map((product, index) => (
                <div key={index}>
                    <Productone

                    
                        img={product.images[0]}
                        title={product.title}
                        price={product.price}
                        category={product.brand}
                        tag={product.tag}
                        
                    />


                      <Link to={`/products/${product.id}`}>
                        <button  className='bg-blue-500 text-white p-3 w-full uppercase'>Buy Now</button>
                    </Link>
                </div>
            ))}
        </div>
    );
};

ProductList.propTypes = {
    products: PropTypes.object.isRequired
};

export default ProductList;
