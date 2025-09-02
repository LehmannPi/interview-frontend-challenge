/**
 * @param {{kg: number, price: number}[]} carrotTypes
 * @param {number} capacity
 * @returns {number}
 */
function getMaxValue(carrotTypes, capacity) {
  // Sorting by price-per-kg, descending
  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  let totalValue = 0;
  let remaining = capacity;

  for (let carrot of carrotTypes) {
    while (remaining >= carrot.kg) {
      remaining -= carrot.kg;
      totalValue += carrot.price;
    }
  }

  return totalValue;
}

const carrotTypes = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;

console.log(getMaxValue(carrotTypes, capacity)); // 840
