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
    for (let j = 0; j < result.length; j++) {
      if (arr[i] === result[j]) {
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
