import React from "react";

function Menu({ title, items }) {
  return (
    <section>
      <h6 className="text-lg text-primary-brand-color">{title}</h6>
      <nav className="grid gap-y-7">
        <ul className="flex flex-col gap-y-1 md:gap-y-1 md:gap-y-4 mt-4">
          {items.map((item, key) => (
            <li key={key}>
              <a className="text-sm hover:text-brand-color" href="#">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}

export default Menu;
