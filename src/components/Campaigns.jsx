import React from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={`absolute top-1/2 -right-6 -translate-y-1/2 !text-purple-700`}
      style={{ style }}
      onClick={onclick}
    >
      <IoIosArrowForward size={22}></IoIosArrowForward>
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={`absolute top-1/2 -left-6 -translate-y-1/2 !text-purple-700`}
      style={style}
      onClick={onclick}
    >
      <IoIosArrowBack size={22}></IoIosArrowBack>
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
  };

  return (
    <div className="py-4">
      <div className="container mx-auto px-8">
        <Title>Kampanyalar</Title>
        <Slider className="-mx-2" {...settings}>
          {banners.length &&
            banners.map((banners, index) => (
              <div key={index}>
                <picture className="block px-2">
                  <img className="rounded-lg" src={banners.image} alt="" />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Campaigns;
