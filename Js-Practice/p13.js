function filter(price, mprice) {
  return price.filter((price) => price >= mprice);
}

const price = [34, 45, 23, 22, 14, 16, 10];
const mprice = 20;

console.log(filter(price, mprice));
