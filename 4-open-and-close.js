/**
 * @param {string} str
 * @returns {void}
 */
export function openClose(str) {
  const pairs = new Map([
      ['{', '}'],
      ['[', ']'],
      ['(', ')'],
    ]),
    closingBracket = new Set(['}', ']', ')']),
    stack = [];

  for (let i = 0; i < str.length; i++) {
    const currentChar = str[i];

    if (pairs.has(currentChar)) stack.push(currentChar);
    else if (closingBracket.has(currentChar))
      if (stack.length === 0 || pairs.get(stack.pop()) !== currentChar)
        return false;
  }
  return stack.length === 0;
}

const str1 = '{[]}';
const str2 = '{(])}';
const str3 = '{([])}(';

console.log(openClose(str1));
console.log(openClose(str2));
console.log(openClose(str3));
