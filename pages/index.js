import Banner from "../components/Banner";
import Product from "../components/Product";
import { Tab } from "@headlessui/react";

import { client } from "../lib/client";

const Home = ({ products, bannerData, categoryData }) => {
  return (
    <div className="max-w-screen-2xl mx-auto md:mx-10">
      <Banner banner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>Best 3D Assets</h2>
        <p>That you can use in your own game</p>
      </div>

      <Tab.Group>
        <Tab.List className="flex justify-center">
          {categoryData.map((fn) => (
            <Tab
              key={fn._id}
              id={fn._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? "borderGradient bg-[#324d67] text-white"
                    : "border-b-2 border-[#324d67] text-[#747474]"
                }`
              }>
              {fn.title}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>

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

  const category = '*[_type == "category"]';
  const categoryData = await client.fetch(category);

  // Pass data to the page via props
  return { props: { products, bannerData, categoryData } };
}

export default Home;
