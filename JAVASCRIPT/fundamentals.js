// 1. Data Types and Variables
// Primitive Data Types
let myString = "Hello, World!"; // String
let myNumber = 42;              // Number
let myBoolean = true;           // Boolean
let myUndefined;                // Undefined
let myNull = null;              // Null
let mySymbol = Symbol("id");    // Symbol

console.log(typeof myString);   // "string"
console.log(typeof myNumber);   // "number"
console.log(typeof myBoolean);  // "boolean"
console.log(typeof myUndefined); // "undefined"
console.log(typeof myNull);      // "object" (special case)
console.log(typeof mySymbol);    // "symbol"

// Reference Data Types (Objects and Arrays)
let myArray = [1, "apple", true, null];
let myObject = {
  name: "Alice",
  age: 25,
  isStudent: false,
};

console.log(myArray);
console.log(myObject);

// 2. Variables (Let, Const, and Var)
var globalVar = "I am accessible everywhere";
let blockScopedVar = "I am only accessible in this block";
const constantValue = 10; // Cannot be reassigned

function variableScopeExample() {
  if (true) {
    var functionScoped = "I'm accessible within the entire function";
    let blockScoped = "I'm only accessible within this block";
    console.log(functionScoped);  // "I'm accessible within the entire function"
    console.log(blockScoped);     // "I'm only accessible within this block"
  }
  console.log(functionScoped);    // Accessible here
}

variableScopeExample();

// 3. Changing HTML Content
const titleElement = document.getElementById("title");
const contentElement = document.getElementById("content");
titleElement.textContent = "JavaScript Basics and Advanced Topics";
contentElement.textContent = "This text was changed using JavaScript.";

const htmlContentElement = document.getElementById("html-content");
htmlContentElement.innerHTML = `
  <h3>Dynamic HTML Content</h3>
  <p>This is an example of how you can change HTML content dynamically using JavaScript.</p>
`;

// 4. Creating and Modifying HTML Elements Dynamically
function createAndModifyElement() {
  const container = document.createElement("div");
  container.className = "dynamic-container";

  const heading = document.createElement("h4");
  heading.textContent = "Dynamic Heading";

  const paragraph = document.createElement("p");
  paragraph.textContent = "This paragraph was added dynamically.";

  container.appendChild(heading);
  container.appendChild(paragraph);
  document.body.appendChild(container);
}

createAndModifyElement();

// 5. Working with Arrays (Advanced)
const numberArray = [10, 20, 30, 40, 50];

// Array Methods: Map, Filter, Reduce
const doubledArray = numberArray.map((num) => num * 2);
console.log("Doubled Array: ", doubledArray);

const filteredArray = numberArray.filter((num) => num > 25);
console.log("Filtered Array (numbers > 25): ", filteredArray);

const sumOfArray = numberArray.reduce((acc, num) => acc + num, 0);
console.log("Sum of Array: ", sumOfArray);

// 6. Changing CSS Styles Dynamically
function changeStyles() {
  const heading = document.getElementById("title");
  heading.style.color = "blue";
  heading.style.fontSize = "2em";
  heading.style.textAlign = "center";
}

changeStyles();

// 7. Form Handling: Capture User Input and Display it
function captureInput() {
  const inputField = document.getElementById("userInput");
  const userInput = inputField.value;
  const displayArea = document.getElementById("displayInput");
  
  displayArea.textContent = `User Input: ${userInput}`;
}

document.getElementById("submitButton").addEventListener("click", captureInput);

// 8. ES6 Features: Destructuring with Arrays and Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 28,
  location: {
    city: "New York",
    country: "USA",
  },
};

const { firstName, lastName, location: { city, country } } = person;
console.log(`Name: ${firstName} ${lastName}, Location: ${city}, ${country}`);

const [firstItem, secondItem, ...remainingItems] = numberArray;
console.log(`First: ${firstItem}, Second: ${secondItem}, Remaining: ${remainingItems}`);

// 9. Event Listeners (Handling DOM Events)
document.getElementById("clickMeButton").addEventListener("click", function() {
  alert("Button was clicked!");
});

// 10. JSON: Parsing and Stringifying
const jsonString = JSON.stringify(person);
console.log("JSON String:", jsonString);

const parsedObject = JSON.parse(jsonString);
console.log("Parsed Object:", parsedObject);

// 11. Date and Time Manipulation
const currentDate = new Date();
console.log("Current Date and Time: ", currentDate.toString());

const specificDate = new Date(2020, 0, 1);
console.log("Specific Date: ", specificDate);

// 12. Math Object and Random Number Generation
const randomNum = Math.random();
console.log("Random Number: ", randomNum);

const randomBetween1And10 = Math.floor(Math.random() * 10) + 1;
console.log("Random Number between 1 and 10: ", randomBetween1And10);

// 13. Functions with Closures
function makeCounter() {
  let count = 0;
  return function() {
    count++;
    console.log("Current count (from closure): " + count);
  };
}
const counterFromClosure = makeCounter();

// 14. Immediately Invoked Function Expression (IIFE)
(function() {
  console.log("This is an IIFE and executes immediately!");
})();

// 15. Higher-Order Functions (Passing functions as arguments)
function applyOperation(num1, num2, operation) {
  return operation(num1, num2);
}
function add(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
console.log("Addition result: " + applyOperation(5, 10, add));
console.log("Multiplication result: " + applyOperation(5, 10, multiply));

// 16. Classes with Inheritance (Advanced OOP)
class Animal {
  constructor(name, type) {
    this.name = name;
    this.type = type;
  }
  speak() {
    console.log(`${this.name} the ${this.type} says: Hi!`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name, "dog");
    this.breed = breed;
  }
  bark() {
    console.log(`${this.name} the ${this.breed} barks loudly!`);
  }
}

const myDog = new Dog("Rex", "German Shepherd");
myDog.speak();
myDog.bark();

// 17. Promises and Async/Await with API (Simulated API Call)
function simulateApiCall() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data from API fetched!");
    }, 1500);
  });
}

async function fetchData() {
  console.log("Fetching data...");
  const data = await simulateApiCall();
  console.log(data);
}

fetchData();

// 18. Modules (Using ES6 import/export simulation with IIFE)
const mathModule = (function() {
  function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }
  return {
    add,
    subtract
  };
})();

console.log("Using module: Add 2 + 3 = " + mathModule.add(2, 3));
console.log("Using module: Subtract 5 - 2 = " + mathModule.subtract(5, 2));

// 19. Asynchronous Iteration (for-await-of)
async function asyncGenerator() {
  const apiCalls = [simulateApiCall(), simulateApiCall(), simulateApiCall()];
  for await (const result of apiCalls) {
    console.log("API call result: " + result);
  }
}
asyncGenerator();

// 20. Advanced Error Handling with Async/Await
async function handleAsyncError() {
  try {
    const result = await simulateApiCall();
    console.log(result);
  } catch (error) {
    console.error("Error occurred: " + error);
  } finally {
    console.log("Operation complete.");
  }
}

handleAsyncError();

// 21. Symbols and Iterators (Advanced)
const mySymbol = Symbol("mySymbol");
const iterableObject = {
  [mySymbol]: 0,
  next() {
    if (this[mySymbol] < 5) {
      return { value: this[mySymbol]++, done: false };
    }
    return { done: true };
  },
  [Symbol.iterator]() {
    return this;
  }
};

for (const value of iterableObject) {
  console.log("Symbol Iteration value: " + value);
}

// 22. DOM Manipulation with Advanced Features
function createAndAppendAdvancedElement() {
  const container = document.createElement("div");
  container.className = "advanced-container";

  const newElement = document.createElement("h2");
  newElement.textContent = "Advanced DOM Manipulation Example";
  
  const childElement = document.createElement("p");
  childElement.textContent = `Hello, ${name}! Welcome to advanced JS.`;

  container.appendChild(newElement);
  container.appendChild(childElement);
  document.body.appendChild(container);
}

createAndAppendAdvancedElement();
