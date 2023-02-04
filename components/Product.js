import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";
import Image from "next/image";

const Product = ({
  product: { image, name, price, _id, postedBy, userImg },
}) => {
  return (
    <div>
      <Link href={`/product/${_id}`}>
        <div className="flex flex-col m-5 bg-white z-30 p-5 rounded-md product-card">
          <div className="mb-3 flex justify-start">
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
            <div>
              <p>Creator</p>
              <h2 className="font-semibold">{postedBy}</h2>
            </div>
          </div>
          <img className="product-image h-64" src={urlFor(image)} alt="img" />
          <p className="product-name italic">{name.substr(0, 15)}</p>
          <div className="h-[1px] bg-gray-600 w-full mt-2"></div>
          <div className="flex justify-between mt-2">
            <p className="product-price my-3">Rs. {price}</p>
            <div className="p-2 bg-yellow-500 rounded-lg">Desc</div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Product;
