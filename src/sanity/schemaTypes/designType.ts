import {ImagesIcon} from '@sanity/icons';
import {defineArrayMember, defineField, defineType} from 'sanity';


export const designType = defineType({
  name: 'design',
  title: 'Art&Designs',
  type: 'document',
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "name",
      title: "Design Type",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96,
      },
    }),
    defineField({
      name: "image",
      title: "Product Image",
      type: "image",
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "blockContent",
      
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{type: "reference", to: {type: "category"}}],
    }),
    defineField({
      name: "stock",
      title: "Stock",
      type: "number",
      validation: (Rule) => Rule.min(0),
    }),
  ],
  preview: {
    select: {
      title: "name",
      media: "image",
      subtitle: "price",
      
    },
    prepare(select) {
      return {
        title: select.title,
        subtitle: `$${select.subtitle}`,
        media: select.media
      };
    },
  },
});