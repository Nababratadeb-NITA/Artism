import React from "react";
import Link from "next/link";

import { urlFor } from "../lib/client";

const Product = ({ product: { image, name, price, _id, postedBy } }) => {
  return (
    <div>
      <Link href={`/product/${_id}`}>
        <div className="flex flex-col m-5 bg-white z-30 p-10 rounded-md product-card">
          <img
            className="product-image h-64 object-contain"
            src={urlFor(image)}
            alt="img"
          />
          <p className="product-name italic">{name}</p>
          <p className="product-price my-3">Rs. {price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
