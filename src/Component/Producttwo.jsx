import PropTypes from 'prop-types';
import Productone from './Productone';

const Producttwo = ({ Producttwo }) => {
    console.log(Producttwo.products)
    return (
        <div className="flex justify-center items-center gap-10">
            {Producttwo.products.map((product) => (
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

Producttwo.PropTypes = {
    product:PropTypes.object,
}

export default Producttwo;
