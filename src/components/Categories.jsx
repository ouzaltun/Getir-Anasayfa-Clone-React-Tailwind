import React from "react";
import categoryData from "../api/categories.json";
import Category from "./ui/Category";
import { useState, useEffect } from "react";
import Title from "./ui/Title";
function Categories() {
  const [categories, setCategories] = useState("");
  useEffect(() => {
    setTimeout(() => setCategories(categoryData), 1000);
  }, []);

  return (
    <div className="bg-white py-4">
      <div className="container mx-auto px-8">
        <Title>Kategoriler</Title>
        <div className="grid grid-cols-4 md:grid-cols-10">
          {!categories.length && "Yükleniyor..."}
          {categories &&
            categories.map((category, index) => (
              <Category key={index} category={category}></Category>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Categories;
