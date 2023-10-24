/* 
   Filename: SophisticatedCode.js
   Content: A complex and elaborate code showcasing various advanced JavaScript concepts.
*/

// Class representing a person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

// Function to sort an array of integers using bubble sort algorithm
function bubbleSort(arr) {
  let len = arr.length;
  let swapped;

  do {
    swapped = false;
    for (let i = 0; i < len - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let tmp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);
}

// Object representing a car
const car = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  isElectric: true,
  startEngine: function() {
    console.log('Engine started.');
  }
};

// Array of colors
const colors = ['red', 'blue', 'green', 'yellow'];

// Function to find the largest number in an array
function findLargestNumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}

// Example usage of the Person class
const person = new Person('John Doe', 30);
person.sayHello();

// Example usage of bubbleSort function
const numbers = [5, 3, 8, 1, 2, 10];
bubbleSort(numbers);
console.log('Sorted numbers:', numbers);

// Example usage of the car object
console.log(`My car is a ${car.brand} ${car.model} (${car.year})`);
car.startEngine();

// Example usage of the findLargestNumber function
const numbersList = [22, 45, 12, 67, 89, 34];
const largestNumber = findLargestNumber(numbersList);
console.log('The largest number is:', largestNumber);

// Other advanced JavaScript concepts like closures, promises, async/await, etc. can also be included here for a more complex code.