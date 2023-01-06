import axios from "axios";
import Image from "next/image";
import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import Product from "../../components/Product";
import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";

function ProductDetails({ products, product }) {
  const [post, setPost] = useState(product);

  const { image, name, details, price, postedBy } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  };

  console.log(product);

  return (
    <>
      {post && (
        <div>
          <div className="product-detail-container flex flex-col">
            <div>
              <div className="image-container">
                <img src={urlFor(image)} className="product-detail-image" />
              </div>
              
            </div>

            <div className="product-detail-desc">
              <h1 className="space-y-2 text-xl font-bold md:text-2xl">
                {name}
              </h1>
              <p className="font-base"> by {postedBy}</p>
              <p className="price">Rs. {price}</p>
              <div className="quantity">
                <h3>Quantity:</h3>
                <p className="quantity-desc flex items-center justify-center">
                  <span
                    className="minus h-12 justify-center items-center flex"
                    onClick={decQty}>
                    <AiOutlineMinus />
                  </span>
                  <span className="num h-12 justify-center items-center flex">
                    {qty}
                  </span>
                  <span
                    className="plus h-12 justify-center items-center flex"
                    onClick={incQty}>
                    <AiOutlinePlus />
                  </span>
                </p>
              </div>
              <div className="buttons">
                <button
                  type="button"
                  className="add-to-cart"
                  onClick={() => onAdd(product, qty)}>
                  Add to Cart
                </button>
                <button
                  type="button"
                  className="buy-now"
                  onClick={handleBuyNow}>
                  Buy Now
                </button>
              </div>
            </div>
            <h2>Details: </h2>
              <p>{details}</p>
          </div>
        </div>
      )}
    </>
  );
}

export async function getServerSideProps({ params: { id } }) {
  const query = `*[_type == "product" && _id == '${id}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product },
  };
}

export default ProductDetails;
