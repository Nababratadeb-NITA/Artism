export default {
  name: "product",
  title: "Product",
  type: "document",
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
      name: "catagory",
      title: "Catagory",
      type: "string",
    },
    {
      name: "userId",
      title: "UserId",
      type: "string",
    },
    {
      name: "postedBy",
      title: "PostedBy",
      type: "postedBy",
    },
  ],
};
