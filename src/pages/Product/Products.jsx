import React from "react";
import Product from "../../components/Product/Product";
import { product } from "../../data";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();

  const handelClick = () => {
    console.log('dfsaf');
    navigate('./add-new-product')
}

  return (
    <div className="my-10 px-5 w-[85%]">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-semibold">Product List</h1>
        <button onClick={handelClick} className="bg-blue-400 p-3 rounded-xl font-bold text-white hover:bg-blue-500 duration-200">
          + Add Product
        </button>
      </div>

      <div className="bg-white mt-5 rounded py-10 px-2">
        <Product product={product}/>
      </div>
    </div>
  );
};

export default Products;
