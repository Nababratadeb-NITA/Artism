import Banner from "../components/Banner";
import Category from "../components/Category";
import Product from "../components/Product";

import { client } from "../lib/client";

const Home = ({ products, bannerData, categoryData }) => {
  // console.log(products);
  return (
    <div className="max-w-screen-2xl mx-auto md:mx-10">
      <Banner banner={bannerData.length && bannerData[0]} />

      <div className="products-heading">
        <h2>Best 3D Assets</h2>
        <p>That you can use in your own game</p>
      </div>

      {/* <Category category={categoryData} products={products} /> */}

      {/* Products */}
      <div className="products-container">
        {products?.map((product) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const query = '*[_type == "product"] | order(_createdAt desc)';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const category = '*[_type == "category"]';
  const categoryData = await client.fetch(category);

  // Pass data to the page via props
  return { props: { products, bannerData, categoryData } };
}

export default Home;
