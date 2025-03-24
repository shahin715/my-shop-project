import React from 'react';
import Img1 from "../../../assets/images/kid1.avif";
import Img2 from "../../../assets/images/kid2.jpg";
import Img3 from "../../../assets/images/kid3.jpg";
import Img4 from "../../../assets/images/kid4.jpg";
import Img5 from "../../../assets/images/kid5.jpg";


// Sample data for Kids' Wear products
const KidsWear = [
  { id: 1, img: Img1, title: 'Kids Wear 1' },
  { id: 2, img: Img2, title: 'Kids Wear 2' },
  { id: 3, img: Img3, title: 'Kids Wear 3' },
  { id: 4, img: Img4, title: 'Kids Wear 4' },
  { id: 5, img: Img5, title: 'Kids Wear 5' },
 
];

const KidsWearProductList = () => {
  return (
    <div className="mt-14 mb-12">
      <div className="text-center mb-10 max-w-[600px] mx-auto">
        <h1 data-aos="fade-up" className="text-3xl font-bold">Kids Wear Collection</h1>
      </div>
      <div>
        {/* Grid for products */}
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
          {KidsWear.map((product) => (
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

export default KidsWearProductList;

