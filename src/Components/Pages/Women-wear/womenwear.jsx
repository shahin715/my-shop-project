import React from 'react';
import { Link } from 'react-router-dom';
import Img1 from "../../../assets/images/product1.webp";
import Img2 from "../../../assets/images/product2.jpg";
import Img3 from "../../../assets/images/product3.jpg";
import Img4 from "../../../assets/images/product4.jpg";
import Img5 from "../../../assets/images/product5.jpg";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    aosDelay: "0",
    color: "Red",
    rating: "4.5/5"
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    aosDelay: "200",
    color: "Blue",
    rating: "4.2/5"
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    aosDelay: "400",
    color: "Black",
    rating: "4.7/5"
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    aosDelay: "600",
    color: "White",
    rating: "4.3/5"
  },
  {
    id: 5,
    img: Img5,
    title: "Fashion T-Shirt",
    aosDelay: "800",
    color: "Green",
    rating: "4.6/5"
  },
];

const Womenwear = () => {
  return (
    <div className="mt-14 mb-12">
      <div>
        {/* Header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Products
          </h1>
        </div>
        {/* Body section */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {/* card section */}
            {ProductsData.map((data) => (
              <div
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id}
                className="space-y-3"
              >
                <img
                  src={data.img}
                  alt={data.title}
                  className="h-[220px] w-[150px] object-cover rounded-md cursor-pointer"
                />
                <div>
                  <h3 className="font-semibold">{data.title}</h3>
                  <p className="text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* View All Button */}
          <div className="flex justify-center">
            <Link to="/womenallproduct">
              <button className="text-center mt-10 cursor-pointer bg-primary text-white py-1 px-5 rounded-md">
                View All
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Womenwear;



