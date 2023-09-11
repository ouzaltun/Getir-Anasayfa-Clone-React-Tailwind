import React from "react";
import Title from "./ui/Title";
import { useState, useEffect } from "react";
import Products from "../api/products.json";
import ProductItem from "./ui/Productitem";

function Favorites() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);

  return (
    <div className="py-4">
      <div className="container mx-auto px-8">
        <Title>Favoriler</Title>
        <div className="grid grid-cols-8 gap-0.1 rounded-lg overflow-hidden">
          {" "}
          {products.length &&
            products.map((product, index) => (
              <ProductItem key={index} product={product}></ProductItem>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Favorites;
