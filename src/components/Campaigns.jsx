import React from "react";
import Slider from "react-slick";
import Banners from "../api/banners.json";
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

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
  const windowWidth = useWindowWidth();

  const [banners, setBanners] = useState([]);
  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3500,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="md:py-8">
      <div className="container mx-auto md:px-8">
        <div className="hidden md:block">
          <Title>Kampanyalar</Title>
        </div>
        <Slider className="md:-mx-2" {...settings}>
          {banners.length &&
            banners.map((banners, index) => (
              <div key={index}>
                <picture className="block md:px-2">
                  <img className="md:rounded-lg" src={banners.image} alt="" />
                </picture>
              </div>
            ))}
        </Slider>
      </div>
    </div>
  );
}

export default Campaigns;
