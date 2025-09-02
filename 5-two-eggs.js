/**
 * @param {number} targetFloor
 * @returns {number}
 */
export function highestFloor(targetFloor) {
  // hybrid solution between binary and linear search
  // the smarter solution for a worst case involves a trianglar number equation to determine the initial
  // size of the steps: x+(x-1)+(x-2)+...+1 = 100 -> x(x+1)/2 = 100 -> x=14
  const maxFloor = 100;
  let drops = 0,
    currentFloor = 0,
    step = 14;

  // "Step Search" Phase
  while (currentFloor + step <= maxFloor) {
    drops++;
    currentFloor += step;
    if (currentFloor == targetFloor)
      return {
        highestSafeFloor: currentFloor,
        totalDrops: drops,
      };
    else if (currentFloor > targetFloor) break;
    step--;
  }

  // Linear Phase
  const startFloor = currentFloor - step;
  for (let floor = startFloor + 1; floor <= currentFloor; floor++) {
    drops++;

    if (floor == targetFloor)
      return {
        highestSafeFloor: floor,
        totalDrops: drops,
      };
  }
}

console.log(highestFloor(77)); // { highestSafeFloor: 77, totalDrops: 7 }
console.log(highestFloor(11)); // { highestSafeFloor: 11, totalDrops: 12 }
console.log(highestFloor(14)); // { highestSafeFloor: 14, totalDrops: 1 }
console.log(highestFloor(45)); // { highestSafeFloor: 45, totalDrops: 10 }
