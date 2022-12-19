import Banner from "../components/Banner";
import Product from "../components/Product";

import { client } from "../lib/client";

const Home = ({ products, bannerData }) => {
  return (
    <div className="max-w-screen-2xl mx-auto md:mx-10">
      <Banner banner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best 3D Assets</h2>
        <p>That you can use in your own game</p>
      </div>

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
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  // Pass data to the page via props
  return { props: { products, bannerData } };
}

export default Home;
