import calculatePizzaPrice from './calculatePizzaPrice';

export default function calculateOrderTotal(order, pizzas) {
  const total = order.reduce((accum, item) => {
    const pizza = pizzas.find((za) => za.id === item.id);
    return accum + calculatePizzaPrice(pizza.price, item.size);
  }, 0);
  return total;
}
