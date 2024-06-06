import PropTypes from 'prop-types';
import Productone from '../Component/Productone';

const ProductList = ({ products }) => {
    console.log(products);

    return (
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {products.products.map((product, index) => (
                <div  key={index}>
                    <Productone
                        img={product.images[0]}
                        title={product.title}
                        price={product.price}
                        category={product.brand}
                        tag={product.tag}
                    />
                </div>
            ))}
        </div>
    );
};


export default ProductList;
