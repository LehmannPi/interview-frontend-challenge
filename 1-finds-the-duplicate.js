/**
 * @template T
 * @param {T[]} values - Array of values
 * @returns {T | null} - The first duplicate found or null if no duplicates
 */
export function findsTheDuplicate(values) {
  const collection = new Set();

  if (Array.isArray(values))
    for (const i of values) {
      if (collection.has(i)) return i;
      collection.add(i);
    }
  return null;
}

const obj = { 1: 2, abc: 7 };

const array = ['a', 1, 2, 4, obj, obj];
const array2 = ['a', 1, 2, 4, 'a', obj];

console.log(findsTheDuplicate(array)); // { '1': 2, abc: 7 }
console.log(findsTheDuplicate(array2)); // a
console.log(findsTheDuplicate({})); // null
console.log(findsTheDuplicate()); // null
