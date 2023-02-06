import Link from "next/link";
import React from "react";
import { MdAddShoppingCart } from "react-icons/md";
import { useStateContext } from "../context/StateContext";

import { urlFor } from "../lib/client";

const Product = ({ product }) => {
  const { qty, onAdd } = useStateContext();
  const { image, name, price, _id, postedBy, userImg } = product;

  const addToCart = () => onAdd(product, qty);

  return (
    <>
          <Link href={`/product/${_id}`}>
    <div className="flex flex-col col-span-12 bg-white rounded-lg cursor-pointer md:col-span-6 xl:col-span-3 h-fit product-card">
        <div className="flex flex-col bg-white z-30 rounded-md product-card">
          <div className="w-full max-h-1/2">
            <img
              src={urlFor(image)}
              className="object-cover w-full rounded-tl-lg rounded-tr-lg aspect-square"
            />
          </div>
        </div>
        </div>
      </Link>

      <Link href={`/product/${_id}`}>
        <div className="flex items-center justify-between px-3 mt-4">
          <h3 className="text-xl font-semibold text-gray-700">
            {name.substr(0, 20)}
          </h3>
          <span className="text-gray-700">&#8377;{price}</span>
        </div>
      </Link>

      <div className="flex items-center gap-3 px-3 mt-4">
        {userImg ? (
          <img
            width={45}
            height={10}
            src={userImg}
            className="w-8 h-8 rounded-full"
            alt={name}
          />
        ) : (
          <div className="w-8 h-8 font-semibold bg-black rounded-full"></div>
        )}

        <span className="text-sm text-gray-500">{postedBy}</span>
      </div>

      <button
        className="flex items-center justify-center gap-3 py-3 mx-4 my-4 text-white bg-orange-500 rounded-lg hover:bg-orange-600"
        onClick={addToCart}>
        <MdAddShoppingCart />
        <span className="leading-none">Add to Cart</span>
      </button>
    </>
  );
};

export default Product;
