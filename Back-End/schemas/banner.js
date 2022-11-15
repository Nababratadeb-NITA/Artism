export default {
  name: 'banner',
  title: 'Banner',
  type: 'document',
  fields: [
      {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
              hotspot: true,
          },
      },
      {
          name: 'altName',
          title: 'Altname',
          type: 'string',
      },
  ],
};