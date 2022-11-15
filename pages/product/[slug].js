import React from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import Product from '../../components/Product';
import { useStateContext } from '../../context/StateContext';

import { client, urlFor } from '../../lib/client';


function ProductDetails({ products, product }) {
  const { image, name, details, price } = product;
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  const handleBuyNow = () => {
    onAdd(product, qty);

    setShowCart(true);
  }
    return (
        <div>
            <div className="product-detail-container">
                <div>
                    <div className="image-container">
                        <img src={urlFor(image)} className="product-detail-image" />
                    </div>

                </div>

                <div className="product-detail-desc">
                    <h1>{name}</h1>
                    <div className="reviews">
                       
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className="price">Rs. {price}</p>
                     <div className="quantity">
                        <h3>Quantity:</h3>
                        <p className="quantity-desc flex items-center justify-center">
                          <span className="minus h-12 justify-center items-center flex" onClick={decQty} ><AiOutlineMinus /></span>
                             <span className="num h-12 justify-center items-center flex">{ qty }</span>
                          <span className="plus h-12 justify-center items-center flex" onClick={incQty} ><AiOutlinePlus /></span>
                        </p>
                      </div>
                    <div className="buttons">
                        <button type="button" className="add-to-cart" onClick={()=> onAdd(product, qty)} >Add to Cart</button>
                        <button type="button" className="buy-now" onClick={handleBuyNow}>Buy Now</button>
                    </div>
                </div>
        </div>
        
        <div className="maylike-products-wrapper">
          <h2>You may also like</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
      </div>
          </div>
    );
}

export async function getStaticPaths() {
   const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: { 
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
} 

  export async function getStaticProps({ params: { slug }}) {
  // Fetch data from external API
   const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'
  
  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails
