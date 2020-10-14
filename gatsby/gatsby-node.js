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
    actions.createPage({
      path: `pizza/${pizza.slug.current}`,
      component: pizzaTemplate,
      context: {
        slug: pizza.slug.current,
      },
    });
  });
};
const turnToppingsIntoPages = async (params) => {};
const turnSlicemastersIntoPages = async (params) => {};

export async function createPages(params) {
  // Create pages dynamically
  // 1. Pizzas
  await turnPizzassIntoPages(params);
  // 2. Toppings
  await turnToppingsIntoPages(params);
  // 3. Slicemasters
  await turnSlicemastersIntoPages(params);
}
