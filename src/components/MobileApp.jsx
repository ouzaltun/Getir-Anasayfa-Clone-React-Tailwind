import React from "react";

function MobileApp() {
  return (
    <div className="bg-primary-brand-color bg-mobile-app  mt-6 rounded-lg text-white md:flex flex-row justify-between items-center container mx-auto">
      <div
        className="flex
       flex-col gap-y-3 p-10 text-center md:text-left"
      >
        <h3 className="font-bold text-2xl tracking-tight">Getir'i indirin!</h3>
        <p className="text-xl font-semibold">
          İstediğiniz ürünleri dakikalar içinde kapınıza <br></br>getirelim.
        </p>
        <nav className="mt-5 flex flex-wrap md:flex-nowrap gap-2 justify-center">
          <a className="transition-all transform hover:scale-90" href="#">
            <img
              src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
          <a className="transition-all hover:scale-90" href="#">
            <img
              src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
          <a className="transition-all hover:scale-90" href="#">
            <img
              src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
              alt=""
              className="md:h-8 lg:h-auto"
            />
          </a>
        </nav>
      </div>
      <picture className="pt-6 hidden md:block self-end">
        <img
          src="https://cdn.getir.com/getirweb-images/common/landing/phoneLanding.png"
          alt=""
        />
      </picture>
    </div>
  );
}

export default MobileApp;
