import React from 'react'

import Img1 from "../../../assets/images/Smarthphone.avif";
import Img2 from "../../../assets/images/Laptop.jpeg";
import Img3 from "../../../assets/images/TV.jpeg";
import Img4 from "../../../assets/images/kid4.jpg";
import Img5 from "../../../assets/images/kid5.jpg";


// Sample data for Kids' Wear products
const Electronic = [
  { id: 1, img: Img1, title: 'Smartphone' },
  { id: 2, img: Img2, title: 'Laptop' },
  { id: 3, img: Img3, title: 'Smart TV' },
  { id: 4, img: Img4, title: 'Headphones' },
  { id: 5, img: Img5, title: 'Gaming Console' },
 
];
const ElectronicsProductList = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">Electronic Collection</h1>
      </div>
      <div>
        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {Electronic.map((product) => (
            <div key={product.id} className="text-center">
              <img
                src={product.img}
                alt={product.title}
                className="h-[220px] object-cover rounded-md cursor-pointer"
              />
              <h3 className="font-semibold mt-3">{product.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ElectronicsProductList


