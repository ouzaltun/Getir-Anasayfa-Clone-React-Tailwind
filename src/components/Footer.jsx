import React from "react";
import Menu from "./ui/Menu";
import { BiLogoFacebookCircle, BiGlobe } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  const menus = [
    {
      title: "Getir'i keşfedin",
      items: [
        { title: "Hakkımızda" },
        { title: "Kariyer" },
        { title: "Teknoloji Kariyerleri" },
        { title: "İletişim" },
        { title: "Sosyal Sorumluluk Projeleri" },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        { title: "Sıkça Sorulan Sorular" },
        { title: "Kişisel Verilerin Korunması" },
        { title: "Gizlilik Politikası" },
        { title: "Kullanım Koşulları" },
        { title: "Çerez Politikası" },
        { title: "İşlem Rehberi" },
      ],
    },
    {
      title: "İş Ortağımız Olun",
      items: [
        { title: "Bayimiz Olun" },
        { title: "Deponuzu Kiralayın" },
        { title: "GetirYemek Restoranı Olun" },
        { title: "GetirÇarşı İşletmesi Olun" },
        { title: "Zincir Restoranlar" },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10">
      <div
        className="container mx-auto px-6 md:px-0
"
      >
        <div className="grid gap-y-6 md:grid-cols-2 lg:grid-cols-4 md:pt-10 pt-5">
          <section>
            <h6 className="text-lg text-primary-brand-color mb-4">
              Getir'i indirin!
            </h6>
            <nav className="grid gap-y-4 grid-cols-2 md:grid-cols-1 gap-2 md:gap-1">
              <img
                src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg"
                alt=""
              />
              <img
                src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg"
                alt=""
              />
              <img
                src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg"
                alt=""
              />
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} {...menu}></Menu>
          ))}
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center border-t border-gray-200 mt-6 py-6">
          <div className="flex gap-x-2 text-xs text-gray-700">
            {" "}
            &copy; 2023 Getir
            <a className="text-primary-brand-color hover:underline" href="#">
              Bilgi Toplumu Hizmetleri
            </a>
          </div>
          <nav className="flex gap-x-3">
            <a
              className="w-8 h-8 text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center  hover:text-brand-color rounded-lg  transition-all"
              href=""
            >
              <BiLogoFacebookCircle size={20}></BiLogoFacebookCircle>
            </a>
            <a
              className="w-8 h-8 text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-brand-color rounded-lg transition-all"
              href=""
            >
              <AiFillTwitterCircle size={20}></AiFillTwitterCircle>
            </a>
            <a
              className="w-8 h-8 text-gray-700 hover:bg-primary-brand-color hover:bg-opacity-10 flex items-center justify-center hover:text-brand-color rounded-lg transition-all"
              href=""
            >
              <FaInstagram size={20}></FaInstagram>
            </a>
            <a
              className="h-8 flex justify-center items-center gap-x-2 px-2 text-sm border-gray-100  text-gray-500 hover:bg-primary-brand-color hover:bg-opacity-10  hover:text-brand-color rounded-lg transition-all hover:border-transparent"
              href="#"
            >
              <BiGlobe size={18}></BiGlobe>
              Türkçe (TR)
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
