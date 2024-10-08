/**
 * Checks if a set contains each element in an array.
 * @param {Set} set - The collection of unique items.
 * @param {*} array - The array of items.
 * @author Derrick Enam Azameti <https://github.com/derrick-enam-azameti>
 * @returns {Boolean}
 */
export default function hasValuesFromArray(set, array) {
  return array.every((value) => set.has(value));
}
