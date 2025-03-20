import React from "react";
import Slider from "react-slick";
import Img0 from "../../assets/images/bestproduct.jpg";
import Img1 from "../../assets/images/Bestproduct2.jpg";
import Img2 from "../../assets/images/Bestproduct3.jpg";
import Img3 from "../../assets/images/Bestproduct4.png";

const TestimonialData = [
  {
    id: 1,
    name: "Wool Blend Coats",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img0,
  },
  {
    id: 2,
    name: "Printed Shirt",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img1,
  },
  {
    id: 3,
    name: "Swimwear Fashion",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img2,
  },
  {
    id: 5,
    name: "MARQUEE Pink Dress",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: Img3,
  },
];

const Bestproduct = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-10 mb-10">
      <div className="mx-auto">
        {/* header section */}
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <h1 data-aos="fade-up" className="text-3xl font-bold">
            Best Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400">
            "Elevate Your Style: Timeless Quality, Unmatched Comfort."
          </p>
        </div>

        {/* Testimonial cards */}
        <div className="">
  <Slider {...settings} className="">
    {TestimonialData.map((data) => (
      <div key={data.id} className="my-6">
        <div className="flex flex-col gap-4 shadow-lg py-8 px-6 mx-auto rounded-xl dark:bg-slate-600 bg-primary/10 relative w-full max-w-xs">
          <div className="mb-4 flex justify-center">
            <img
              src={data.img}
              alt=""
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <p className="text-xs dark:text-slate-300 text-gray-500">
              {data.text}
            </p>
            <h1 className="text-xl font-bold dark:text-slate-300 text-black/80 dark:text-light">
              {data.name}
            </h1>
          </div>
          <p className="text-black/20 text-9xl font-serif absolute top-0 right-0"></p>
        </div>
      </div>
    ))}
  </Slider>
</div>
      </div>
    </div>
  );
};

export default Bestproduct;
