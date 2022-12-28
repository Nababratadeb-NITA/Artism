import { Tab } from "@headlessui/react";
import React from "react";
import Product from "./Product";

const Category = ({ category, products }) => {
  return (
    <>
      <Tab.Group>
        <Tab.List className="flex justify-center">
          {category.map((fn) => (
            <Tab
              key={fn._id}
              id={fn._id}
              className={({ selected }) =>
                `whitespace-nowrap rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${
                  selected
                    ? "borderGradient bg-[#324d67] text-white"
                    : "border-b-2 border-[#324d67] text-[#747474]"
                }`
              }>
              {fn.title}
            </Tab>
          ))}
        </Tab.List>
      </Tab.Group>
    </>
  );
};

export default Category;
