import { RiMacbookLine } from "react-icons/ri";

export default {
  name: "product",
  title: "Product",
  type: "document",
  icon: RiMacbookLine,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      name: "price",
      title: "Price",
      type: "string",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "reference",
      to: [{ type: "category" }],
    },
  ],
};
