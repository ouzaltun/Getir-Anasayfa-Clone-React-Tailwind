import React from "react";
import cardsData from "../api/cards.json";
import { useEffect, useState } from "react";
function Card() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    setCards(cardsData);
  }, []);

  return (
    <div className="container mx-auto mt-10">
      <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.length &&
          cards.map((card) => (
            <div className="bg-white p-12 rounded-lg shadow-xl flex flex-col justify-center items-center text-center gap-y-4">
              {" "}
              <img
                className="object-contain h-[160px]"
                src={card.image}
                alt=""
              />
              <h6 className="font-semibold text-primary-brand-color mt-2 text-2xl tracking-wide">
                {card.title}
              </h6>
              <p
                className="mt-2 text-gray-500 text-lg 
              
              "
              >
                {card.description}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Card;
