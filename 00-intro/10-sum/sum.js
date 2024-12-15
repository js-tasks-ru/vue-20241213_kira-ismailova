/**
 * Вычислить сумму двух чисел
 *
 * @param {number} a - первое число
 * @param {number} b - второе целое
 * @return {number} сумма чисел a и b
 */
export function sum(a, b) {
  let result = +a + +b;
  if (isNaN(result)) {
    throw new Error("Both arguments must be numbers.");
  }
  return result;
}
