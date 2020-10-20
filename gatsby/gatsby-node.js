import path from 'path';
import fetch from 'isomorphic-fetch';

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
    actions.createPage({
      path: `topping/${topping.slug.current}`,
      component: toppingTemplate,
      context: {
        topping: topping.name,
      },
    });
  });
};

async function turnSlicemastersIntoPages({ graphql, actions }) {
  const {
    data: { slicemasters },
  } = await graphql(`
    query {
      slicemasters: allSanityPerson {
        totalCount
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
  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(slicemasters.totalCount / pageSize);
  Array.from({ length: pageCount }).forEach((ele, i) => {
    console.log(`Creating page ${i}`);
    actions.createPage({
      path: `/slicemasters/${i + 1}`,
      component: path.resolve('./src/pages/slicemasters.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

async function fetchBeersAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const res = await fetch('https://sampleapis.com/beers/api/ale');
  const beers = await res.json();

  for (const beer of beers) {
    const nodeMeta = {
      id: createNodeId(`beer-${beer.name}`),
      parent: null,
      children: [],
      internal: {
        type: 'Beer',
        mediaType: 'application/json',
        contentDigest: createContentDigest(beer),
      },
    };
    actions.createNode({ ...beer, ...nodeMeta });
  }
}

async function fetchWinesAndTurnIntoNodes({
  actions,
  createNodeId,
  createContentDigest,
}) {
  const base = 'https://sampleapis.com/wines/api';
  const [
    redsResponse,
    whitesResponse,
    sparklingResposne,
    roseResposne,
    portResposne,
  ] = [
    await fetch(`${base}/reds`),
    await fetch(`${base}/whites`),
    await fetch(`${base}/sparkling`),
    await fetch(`${base}/rose`),
    await fetch(`${base}/port`),
  ];
  const [reds, whites, sparkling, rose, port] = [
    await redsResponse.json(),
    await whitesResponse.json(),
    await sparklingResposne.json(),
    await roseResposne.json(),
    await portResposne.json(),
  ];

  reds.forEach((red) => {
    const nodeMeta = {
      id: createNodeId(`wine-${red.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'RedWine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(red),
      },
    };
    actions.createNode({ ...red, ...nodeMeta });
  });
  whites.forEach((white) => {
    const nodeMeta = {
      id: createNodeId(`wine-${white.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'WhiteWine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(white),
      },
    };
    actions.createNode({ ...white, ...nodeMeta });
  });
  sparkling.forEach((sw) => {
    const nodeMeta = {
      id: createNodeId(`wine-${sw.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'SparklingWine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(sw),
      },
    };
    actions.createNode({ ...sw, ...nodeMeta });
  });
  rose.forEach((rw) => {
    const nodeMeta = {
      id: createNodeId(`wine-${rw.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'RoseWine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(rw),
      },
    };
    actions.createNode({ ...rw, ...nodeMeta });
  });
  port.forEach((pw) => {
    const nodeMeta = {
      id: createNodeId(`wine-${pw.wine}`),
      parent: null,
      children: [],
      internal: {
        type: 'PortWine',
        mediaType: 'application/json',
        contentDigest: createContentDigest(pw),
      },
    };
    actions.createNode({ ...pw, ...nodeMeta });
  });
}

export async function sourceNodes(params) {
  await Promise.all([
    fetchBeersAndTurnIntoNodes(params),
    fetchWinesAndTurnIntoNodes(params),
  ]);
}

export async function createPages(params) {
  await Promise.all([
    turnPizzassIntoPages(params),
    turnToppingsIntoPages(params),
    turnSlicemastersIntoPages(params),
  ]);
}
