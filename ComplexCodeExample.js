// Filename: ComplexCodeExample.js
// Description: Complex code example demonstrating advanced concepts and techniques

// Utility functions
function factorial(n) {
  if (n === 0 || n === 1)
    return 1;
  else
    return n * factorial(n - 1);
}

function fibonacci(n) {
  if (n <= 1)
    return n;
  else
    return fibonacci(n - 1) + fibonacci(n - 2);
}

// Class definitions
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  introduce() {
    console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }

  getArea() {
    return Math.PI * this.radius ** 2;
  }
  
  getCircumference() {
    return 2 * Math.PI * this.radius;
  }
}

// Main program
(function() {
  const factorials = [];
  for (let i = 0; i <= 10; i++) {
    factorials.push(factorial(i));
  }
  
  console.log("Factorials:", factorials);
  
  const fibSequence = [];
  for (let i = 0; i <= 10; i++) {
    fibSequence.push(fibonacci(i));
  }
  
  console.log("Fibonacci sequence:", fibSequence);
  
  const john = new Person("John", 25);
  john.introduce();
  
  const circle = new Circle(5);
  console.log("Circle Area:", circle.getArea());
  console.log("Circle Circumference:", circle.getCircumference());
})();

// Additional functions
function getSum(a, b) {
  return a + b;
}

function getDifference(a, b) {
  return a - b;
}

function getProduct(a, b) {
  return a * b;
}

function getQuotient(a, b) {
  return a / b;
}

function isEven(num) {
  return num % 2 === 0;
}

// Function calls
console.log("Sum:", getSum(5, 10));
console.log("Difference:", getDifference(15, 7));
console.log("Product:", getProduct(3, 4));
console.log("Quotient:", getQuotient(10, 2));
console.log("Is 6 even?", isEven(6));