/**
 * @template T
 * @param {T[]} values - Array of values
 * @returns {void}
 */
export async function secondsApart(values) {
  let time = 1000;
  for (let i = 0; i < values.length; i++) {
    await new Promise((resolve) => setTimeout(resolve, time));
    console.log(time, values[i]);
    time += time;
  }
}

const array = ['a', 'b', 'c', 'd'];

secondsApart(array);
