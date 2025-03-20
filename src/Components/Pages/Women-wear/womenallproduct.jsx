import React from 'react';
import Img1 from "../../../assets/images/product1.webp";
import Img2 from "../../../assets/images/product2.jpg";
import Img3 from "../../../assets/images/product3.jpg";
import Img4 from "../../../assets/images/product4.jpg";
import Img5 from "../../../assets/images/product5.jpg";

// Sample data for products
const products = [
  { id: 1, img: Img1, title: 'Product 1' },
  { id: 2, img: Img2, title: 'Product 2' },
  { id: 3, img: Img3, title: 'Product 3' },
  { id: 4, img: Img4, title: 'Product 4' },
  { id: 5, img: Img5, title: 'Product 5' },
  { id: 6, img: Img1, title: 'Product 6' },
  { id: 7, img: Img2, title: 'Product 7' },
  { id: 8, img: Img3, title: 'Product 8' },
  { id: 9, img: Img4, title: 'Product 9' },
  { id: 10, img: Img5, title: 'Product 10' },
];

const WomenAllProduct = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">All Products</h1>
      </div>
      <div>
        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.img}
                alt={product.title}
                className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
              />
              <h3 className="font-semibold mt-3">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WomenAllProduct;

