import PropTypes from 'prop-types';
import Productone from './Productone';

const ProductList = ({ products }) => {
    console.log(products.products)
    return (
        <div className="flex justify-center items-center gap-10 flex-wrap">
            {products.products.map((product) => (
                <Productone
                   key={product.id}
                   title={product.name} 
                   price={product.price} 
                   category={product.category} 
                   tag={product.tag}
/>
            ))}
        </div>
    );
}


  

export default ProductList;
