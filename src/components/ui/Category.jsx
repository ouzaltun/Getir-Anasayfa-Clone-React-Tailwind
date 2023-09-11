import React from "react";

function Category({ category: { id, title, image } }) {
  return (
    <div className="">
      <a
        href=""
        className="flex flex-col group items-center gap-y-2 text-center p-4 transition hover:bg-purple-50"
      >
        <img
          className="h-12 rounded-sm border border-gray-100"
          src={image}
          alt=""
        />
        <span className="text-sm font-semibold text-gray-700 group-hover:text-brand-color tracking-tight whitespace-nowrap">
          {title}
        </span>
      </a>
    </div>
  );
}

export default Category;
