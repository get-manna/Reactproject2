import React from 'react';

const ContactPage = () => {
  return (
    <div className="container mx-auto">
      <div className="max-w-lg mx-auto my-10 bg-gray-100 p-10 rounded-md ">
        <h2 className="text-2xl font-bold mb-5">Contact Us</h2>
        <form>
          <div className="mb-4">
            <label>Enter Email </label>
            <input type="text"  className=" p-2 w-full " />
          </div>
         
          <button  className="bg-blue-500 text-white px-5 py-2 ">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
