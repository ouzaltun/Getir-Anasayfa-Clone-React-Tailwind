import React from "react";
import Slider from "react-slick";
import { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";

function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const windowWidth = useWindowWidth();

  const phones = {
    US: "+1",
    FR: "+80",
    DE: "+90",
    IT: "+7",
    TR: "+90",
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  };
  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {" "}
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <h3>
              <img
                className="w-full h-[500px] ob"
                src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="w-full h-[500px] ob"
                src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
                alt=""
              />
            </h3>
          </div>
          <div>
            <h3>
              <img
                className="w-full h-auto md:h-[500px] ob"
                src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
                alt=""
              />
            </h3>
          </div>
        </Slider>
      )}
      <div className="md:container flex gap-y-4 relative md:absolute left-0 md:left-1/2 top-0 translate-x-0 md:-translate-x-1/2 h-full z-20  justify-between items-center md:p-16">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h3 className="mt-8 text-2xl md:text-4xl font-semibold text-white">
            Dakikalar içinde kapınızda
          </h3>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 z-20 p-6">
          <h5 className="text-primary-brand-color mb-4 font-semibold text-center">
            Giriş yap veya kayıt ol
          </h5>
          <div className="flex gap-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              onSelect={(code) => setSelected(code)}
              selected={selected}
              className="flag-select"
            />

            <label className="flex-1 relative block">
              <input className="h-14 px-4 border-2  border-gray-200 w-full rounded transition-colors hover:border-primary-brand-color focus:border-primary-brand-color outline-none peer focus:pt-1 z-20" />
              <span className="absolute top-0 left-0  px-4 mt-1  text-[12px] h-full text-gray-400 peer-focus:text-[10px]">
                Telefon Numarası
              </span>
            </label>
          </div>
          <div>
            <button className="bg-brand-yellow h-12 flex items-center w-full justify-center rounded-md text-sm text-primary-brand-color font-semibold transition-colors hover:text-brand-yellow hover:bg-primary-brand-color">
              Telefon numarası ile devam et
            </button>
            <hr className=" h-[1px] bg-gray-300 my-4" />

            <button className="bg-blue-900 bg-opacity-10 h-12 flex items-center w-full rounded-md text-sm text-blue-700 font-semibold transition-colors hover:text-white px-4 hover:bg-blue-700">
              <FaFacebook size={24}></FaFacebook>
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
