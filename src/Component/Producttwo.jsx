import PropTypes from 'prop-types';
import Productone from './Productone';

const Producttwo = ({ products }) => {
    return (
        <div className="flex justify-center items-center gap-10">
            {products.map((product) => (
                <Productone
                    key={product.id}
                    tittle={product.name} 
                    price={product.price} 
                    category={product.category} 
                    tag={product.tag}
                />
            ))}
        </div>
    );
}

Producttwo.propTypes = {
    products: PropTypes.array.isRequired,
};

export default Producttwo;
