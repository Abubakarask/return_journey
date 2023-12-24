// Logical Operations

/**
 * @param {number[]} arr1 - The first array of integers.
 * @param {number[]} arr2 - The second array of integers.
 * @context Loop through 2 array and find common elements between two arrays of integers.
 * @returns {number[]} commonElementsArray - An array containing common elements.
 */
function findCommonElements(arr1, arr2) {
  // Array to store common elements
  let commonElementsArray = [];

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      // Check if the current elements are equal
      if (arr1[i] === arr2[j]) {
        commonElementsArray.push(arr1[i]);

        // Break the inner loop to avoid duplicate entries
        break;
      }
    }
  }

  // Return the array containing common elements
  return commonElementsArray;
}
