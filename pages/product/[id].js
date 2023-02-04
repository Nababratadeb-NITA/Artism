import { useRouter } from "next/router";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";

import { useStateContext } from "../../context/StateContext";
import { client, urlFor } from "../../lib/client";
import { downloadImage } from "../../lib/utils";

function ProductDetails({ product }) {
  const { image, name, details, price, postedBy, _id } = product;

  const { image, name, details, price, postedBy, category } = product;

  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const router = useRouter();

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  const addToCart = () => {
    return onAdd(product, qty);
  };

  const goBack = () => {
    router.back();
  };

  return (
    <>
      <div>
        <div className="product-detail-container flex flex-col">
          <div>
            <div className="image-container">
              <img src={urlFor(image)} className="product-detail-image" />
            </div>
          </div>

          <div className="product-detail-desc">
            <h1 className="space-y-2 text-xl font-bold md:text-2xl">{name}</h1>
            <p className="font-base"> CREATED BY {postedBy}</p>
            <p className="price">&#8377;{price}</p>
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
                onClick={() => downloadImage(_id, image)}>
                Buy Now
              </button>
            </div>
          </div>
          <h2>Details: </h2>
          <p>{details}</p>
    <div className="grid grid-cols-12 my-8 mx-4">
      <button
        className="p-3 flex w-fit xl:hidden border border-gray-300 rounded-full hover:bg-gray-200"
        onClick={goBack}
      >
        <HiOutlineArrowNarrowLeft className="text-lg" />
      </button>

      <div className="flex justify-center mt-4 xl:mt-0 w-full col-span-12 xl:col-span-6">
        <img
          src={urlFor(image)}
          alt={name}
          className="object-cover w-full md:w-4/5 rounded-lg aspect-square"
        />
      </div>
      <div className="flex flex-col items-start col-span-12 xl:col-span-6 pt-8">
        <button
          className="p-3 hidden xl:flex border border-gray-300 rounded-full hover:bg-gray-200"
          onClick={goBack}
        >
          <HiOutlineArrowNarrowLeft className="text-lg" />
        </button>

        <div className="flex flex-col md:flex-row items-start md:items-end  gap-3 md:gap-8">
          <h1 className="mt-8 text-3xl xl:text-5xl font-semibold">{name}</h1>
          <span className="px-4 text-gray-500 border border-gray-400 rounded">
            {category}
          </span>
        </div>

        <span className="mt-6 md:mt-3 text-lg">&#8377; {price}</span>

        <span className="mt-4 text-gray-500">Created by {postedBy}</span>

        <p className="mt-8 leading-relaxed text-gray-700">{details}</p>

        <div className="flex items-center w-full xl:w-fit mt-8 border border-gray-300 rounded">
          <button
            className="px-4 py-2 border-r flex justify-center flex-grow border-gray-300"
            onClick={decQty}
          >
            <AiOutlineMinus />
          </button>
          <span className="px-4 py-2 font-semibold flex-grow text-center">
            {qty}
          </span>
          <button
            className="px-4 py-2 border-l flex justify-center border-gray-300 flex-grow"
            onClick={incQty}
          >
            <AiOutlinePlus />
          </button>
        </div>

        <div className="flex items-center w-full xl:w-fit gap-8 mt-5">
          <button
            className="px-6 py-2 flex-grow text-white bg-orange-500 rounded-lg hover:bg-orange-600"
            onClick={addToCart}
          >
            Add to Cart
          </button>
          <button
            className="px-6 py-2 text-orange-500 flex-grow border border-orange-500 rounded-lg"
            onClick={handleBuyNow}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
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
