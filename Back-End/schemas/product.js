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
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "string",
    },
    {
      name: "userImg",
      title: "UserImg",
      type: "string",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "destination",
      title: "Destination",
      type: "url",
    },
  ],
};
