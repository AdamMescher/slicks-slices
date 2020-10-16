import { FaPizzaSlice as icon } from 'react-icons/fa';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000),
      inputComponent: PriceInput,
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.name',
      toppingIsVeg0: 'toppings.0.vegetarian',
      topping1: 'toppings.1.name',
      toppingIsVeg1: 'toppings.1.vegetarian',
      topping2: 'toppings.2.name',
      toppingIsVeg2: 'toppings.2.vegetarian',
      topping3: 'toppings.3.name',
      toppingIsVeg3: 'toppings.3.vegetarian',
    },
    prepare: ({ title, media, ...toppings }) => {
      const tops = Object.values(toppings).filter(
        (top, i) => top && i % 2 === 0
      );
      const allToppingsAreVeg = Object.values(toppings)
        .filter((ele, i) => i % 2 !== 0)
        .every(Boolean);
      return {
        title: allToppingsAreVeg ? `${title} 🌱` : `${title}`,
        media,
        subtitle: tops.join(', '),
      };
    },
  },
};
