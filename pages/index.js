import { useState } from "react";
import Banner from "../components/Banner";
import Category from "../components/Category";
import Product from "../components/Product";

import { client } from "../lib/client";

const Home = ({ products, bannerData, categoryData }) => {
  const [originalProducts, setOriginalProducts] = useState(products);
  const [productsNew, setProductsNew] = useState(originalProducts);

  const filterProducts = (prod) => {
    setProductsNew(prod);
  };

  const resetProducts = () => {
    setProductsNew(originalProducts);
  };

  return (
    <div className="mx-auto max-w-screen-2xl md:mx-10">
      <Banner banner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best 3D Assets</h2>
        <p>That you can use in your own game</p>
      </div>

      <Category
        category={categoryData}
        products={originalProducts}
        filterProducts={filterProducts}
        resetProducts={resetProducts}
      />

      {/* Products */}
      <div className="grid grid-cols-12 gap-8 mt-10">
        {productsNew?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const query = '*[_type == "product"] | order(_updatedAt desc)';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const category = '*[_type == "category"]';
  const categoryData = await client.fetch(category);

  // Pass data to the page via props
  return { props: { products, bannerData, categoryData } };
}

export default Home;
