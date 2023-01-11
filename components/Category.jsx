import { Tab } from "@headlessui/react";

import React, { useState } from "react";

const Category = ({ category, products }) => {
  const [items, setItems] = useState(products);

  const filter = (cetItem) => {};
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#324d67] text-white"
                  : "border-b-2 border-[#324d67] text-[#747474]"
              }`
            }>
            ALL
          </Tab>
          <Tab
            onClick={() => filter("3D")}
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#324d67] text-white"
                  : "border-b-2 border-[#324d67] text-[#747474]"
              }`
            }>
            3D
          </Tab>
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#324d67] text-white"
                  : "border-b-2 border-[#324d67] text-[#747474]"
              }`
            }>
            2D
          </Tab>
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#324d67] text-white"
                  : "border-b-2 border-[#324d67] text-[#747474]"
              }`
            }>
            FPS
          </Tab>
          <Tab
            className={({ selected }) =>
              `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                selected
                  ? "borderGradient bg-[#324d67] text-white"
                  : "border-b-2 border-[#324d67] text-[#747474]"
              }`
            }>
            RPG
          </Tab>
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Category;
