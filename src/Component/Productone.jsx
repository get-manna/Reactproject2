import PropTypes from "prop-types";

const Productone = ({ img, title, price, category, tag }) => {
  return (
    <div className='border flex flex-col'>
        <img className="w-full max-w-[400px] max-h-[400px] object-cover" src={img}  alt="product"  />
       

        <section className='flex justify-between p-3'>
          <h2>{title}</h2>
          <p>price: ${price}</p>
        </section>
        <hr /> 
        <section className='flex justify-between p-3'>
          <h2>{category}</h2>
          <p>{tag}</p>
        </section>
        <button className='text-bold text-white bg-blue-500 uppercase rounded p-2'>
          Add To Cart
        </button>
    </div>
  );
};



export default Productone;
