import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

function ProductItem({ product }) {
  return (
    <div className="relative bg-white flex flex-col items-center gap-y-1 text-center p-3">
      <button className="absolute top-0 right-0 w-8 h-8 flex items-center justify-center bg-white rounded-lg m-2 text-brand-color shadow-md hover:border-brand-color  transition border border-gray-200">
        <AiOutlinePlus size={16}></AiOutlinePlus>
      </button>
      <img src={product.image} alt="" />
      <div className="text-sm font-semibold text-brand-color">
        {product.price} ₺
      </div>
      <div className="text-sm font-semibold text-gray-900">{product.title}</div>
      <div className="text-sm text-gray-500">{product.alt}</div>
    </div>
  );
}

export default ProductItem;
