import path from 'path';

const turnPizzassIntoPages = async ({ graphql, actions }) => {
  const pizzaTemplate = path.resolve('./src/templates/Pizza.js');
  const { data } = await graphql(`
    query {
      pizzas: allSanityPizza {
        nodes {
          name
          slug {
            current
          }
        }
      }
    }
  `);
  data.pizzas.nodes.forEach((pizza) => {
    console.log('Creating page for pizza: ', pizza.name);
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
};

const turnToppingsIntoPages = async ({ graphql, actions }) => {
  const toppingTemplate = path.resolve('./src/pages/pizzas.js');
  const { data } = await graphql(`
    query {
      toppings: allSanityTopping {
        nodes {
          name
          id
          slug {
            current
          }
        }
      }
    }
  `);
  data.toppings.nodes.forEach((topping) => {
    console.log('Creating page for topping: ', topping.name);
    actions.createPage({
      path: `topping/${topping.slug.current}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
};
const turnSlicemastersIntoPages = async (params) => {};

export async function createPages(params) {
  // Create pages dynamically
  // 1. Pizzas
  await Promise.all([
    turnPizzassIntoPages(params),
    turnToppingsIntoPages(params),
  ]);
  // 3. Slicemasters
  // await turnSlicemastersIntoPages(params);
}
