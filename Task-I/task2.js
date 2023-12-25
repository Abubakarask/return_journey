// Object Operation

/**
 * @param {*} car1 - The first car object to merge.
 * @param {*} car2 - The second car object to merge.
 * @context Merges two car objects into a new object, preserving properties from both.
 * @returns {Object} mergedCar - The merged car object.
 */
function mergeCars(car1, car2) {
  // Create a new object to store the merged properties
  let mergedCar = {};

  // Copy properties from the first car object
  for (let key in car1) {
    console.log(key);
    // Check if the property is not inherited from the prototype chain
    for (let key in car1) {
      mergedCar[key] = [car1[key]];
    }
  }

  console.log(mergedCar);

  // Copy properties from the second car object, overwriting any existing properties
  for (let key in car2) {
    // Check if the property is not inherited from the prototype chain
    if (mergedCar[key] === undefined) {
      // If the property doesn't exist, create a new array with the value
      mergedCar[key] = [car2[key]];
    } else {
      // If the property already exists, push the value to the existing array
      mergedCar[key].push(car2[key]);
    }
  }

  console.log(mergedCar);
  // Return the merged object
  return mergedCar;
}

// Example car objects
const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2020,
};

const car2 = {
  brand: "Tesla",
  model: "Model S",
  year: 2021,
};

// Merge the two car objects
let mergedCar = mergeCars(car1, car2);

// Display the merged car object
console.log(mergedCar);
