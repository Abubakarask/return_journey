// array Manipulation

/**
 *
 * @param {*} arr
 * @context Loops through the input arr and finds unique elements in arr
 * @returns result - arr
 */
function uniqueElements(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;

    // Check if the current element is already in the result array
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] === arr[j] && i !== j) {
        isDuplicate = true;
        break;
      }
    }

    // If not a duplicate, add it to the result array
    if (!isDuplicate) {
      result.push(arr[i]);
    }
  }

  return result;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10, 10, 9];
const response = uniqueElements(arr);

console.log(response);
