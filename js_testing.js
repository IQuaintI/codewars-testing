//If one set if odd and the other even then return true//
/*
const { get } = require("unsplash-js/dist/methods/photos");
*/

/*
function lovefunc(flower1, flower2) {
  if (flower1 % 2 === 0 && flower2 % 2 === 0) {
    return false;
  } else if (flower1 % 2 === 1 && flower2 % 2 === 1) {
    return false;
  } else {
    return true;
  }
}
*/

//Double array//

/*
function maps(x) {
  return x.map((n) => n * 2);
}
*/

//A function that accepts a string and returns the amount of chosen letters in the string//

/*
function strCount(str, letter) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === letter) {
      count++;
    }
  }
  return count;
}

*/

/*
//Function that takes two integer as strings and returns the sum as strings//
function sumStr(a, b) {
  return String(Number(a) + Number(b));
}

console.log(sumStr("4", "5"));
*/

/*
//Square the numbers in an array amd then add them together//
function squareSum(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i] * numbers[i];
  }
  return sum;
}

console.log(squareSum([1, 2, 2]));
*/

/*
//Function that adds an array of numbers//
function addNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
*/

/*
//Function that filters an array and returns the names that have  4 letters//
function friend(friends) {
  return friends.filter((name) => name.length === 4);
}

console.log(friend(["Ryan", "Kieran", "Mark"]));
*/

/*
//Function that takes a pin and makes sure it is 4 or 6 digits//
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin);
}
*/

/*
//Function that sums the positive numbers in an array//
function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}
*/

/*
//Array testings//
for (let i = 0; i < 10; i++) {
  console.log(i);
}
*/

/*
//Loop that goes form 10 to 1//
for (let i = 10; i > 0; i--) {
  console.log(i);
}
*/

/*
//Loop through a list of hats and prints out the hats//
let hat = ["baseball cap", "bowler", "top hat", "fedora"];
for (let i = 0; i < hat.length; i++) {
  console.log(hat[i]);
}
*/

/*
//A game of rock paper scissors//
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (p1 === "rock" && p2 === "scissors") {
    return "Player 1 won!";
  } else if (p1 === "scissors" && p2 === "paper") {
    return "Player 1 won!";
  } else if (p1 === "paper" && p2 === "rock") {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
*/

/*
//Functin that removes the first and last character of a string//
function removeChar(str) {
  return str.slice(1, -1);
}
*/

/*
//Function that accepts and integer and string and returns the string that many times//
function repeatStr(n, s) {
  return s.repeat(n);
}
*/

/*
//Repeat a string a number of times//
console.log(repeatStr(3, "*"));
let color = "red";
console.log(color.repeat(3));
*/

/*
//Function that finds the summation of every number from 1 to num//
function summation(num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
*/

/*
//Function that returns the lowest integer in an array//
function smallestIntegerFinder(args) {
  return Math.min(...args);
}
*/

/*
//Spread operator//
let arr = [1, 2, 3, 4, 5];

function min(arr) {
  return Math.min(...arr);
}
console.log(min(arr));
*/

/*
//Function that adds all the numbers in an array ecept the highest and lowest//
function sumArray(array) {
  if (array === null || array.length <= 1) {
    return 0;
  }
  let sum = 0;
  let max = Math.max(...array);
  let min = Math.min(...array);
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum - max - min;
}
*/

/*
//Alternate solution to the above//
function sumArray(arr) {
  sort = arr.sort((a, b) => a - b);
  sort.pop();
  sort.shift();
  return sort.reduce((a, b) => a + b, 0);
}

console.log(sumArray([6, 2, 1, 8, 10]));
*/

/*
//Function that removes the spaces from a string//
function noSpace(x) {
  return x.replace(/\s/g, "");
}

function noSpace(x) {
  return x.split(" ").join("");
}

//split method//
let str = "Hello World";
let res = str.split(" ").join("");

console.log(str);
console.log(res);
*/

/*
//Counts true values in an array//
function countSheep(arrayOfSheep) {
  let count = 0;
  for (let i = 0; i < arrayOfSheep.length; i++) {
    if (arrayOfSheep[i] === true) {
      count++;
    }
  }
  return count;
}

//Alternative solution//
function countSheeps(arrayOfSheeps) {
  return arrayOfSheeps.filter(Boolean).length;
}

console.log(
  countSheeps([true, false, true, true, false, true, true, true, true])
);
*/

/*
//how to convert a number to an array//
function digitize(n) {
  return String(n).split("").map(Number).reverse();
}

console.log(digitize(123));
*/

/*
//Conversion testing//
function string(n) {
  return String(n).split("").map(Number).reverse();
  //String(n) converts the number to a string
  //split("") splits the string into an array
  //map(Number) converts the string to a number
  //reverse() reverses the array
}

console.log(string(123));
*/

/*
//Replace the U with a T//
function DNAtoRNA(dna) {
  return dna.replace(/T/g, "U");
}
*/

/*
//Function that greets in multiple languages//
function greet(language) {
  let greeting = {
    english: "Welcome",
    czech: "Vitejte",
    danish: "Velkomst",
    dutch: "Welkom",
    estonian: "Tere tulemast",
    finnish: "Tervetuloa",
    flemish: "Welgekomen",
    french: "Bienvenue",
    german: "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  };
  return greeting[language] || "Welcome";
}
*/

/*
//Function that sums the positive numbers and negative numbers in an array//
function countPositivesSumNegatives(input) {
  if (input === null || input.length === 0) {
    return [];
  }
  let sum = 0;
  let count = 0;
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++;
    } else {
      sum += input[i];
    }
  }
  return [count, sum];
}
*/

/*
//Third angle of a triangle//
function otherAngle(a, b) {
  return 180 - (a + b);
}
*/

/*
//Function that sum of an array of integers as if they were numbers//
function sumMix(x) {
  return x.map((a) => +a).reduce((a, b) => a + b);
}
*/

/*
//Function that convert an array of strings to an array of numbers//
function sumMix(x) {
  return x.map((a) => +a);
}

console.log(sumMix([9, 3, "7", "3"]));
*/

/*
//Function that is true for none of the numbers in the array//
function none(arr, fun) {
  return arr.every((x) => !fun(x));
}
*/

/*
//Every method testing//
function evenNum(arr) {
  return arr.every((x) => x % 2 === 0);
}

console.log(evenNum([2, 4, 5, 8, 10])); //false
*/
/*
function sameCase(a, b) {
  if (a || b === undefined) {
    return 1;
  } else if (a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1;
  } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1;
  } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
    return 0;
  } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
    return 0;
  }
}
*/

/*
const paragraph = "The quick brown fox jumps over the lazy dog. It barked.";
const regex = /[A-Z]/g;
*/

/*
Write a function that will check if two given characters are the same case.

    If either of the characters is not a letter, return -1
    If both characters are the same case, return 1
    If both characters are letters, but not the same case, return 0
*/

/*
function sameCase(a, b) {
  if (a || b === undefined) {
    return -1;
  } else if (a === a.toUpperCase() && b === b.toUpperCase()) {
    return 1;
  } else if (a === a.toLowerCase() && b === b.toLowerCase()) {
    return 1;
  } else if (a === a.toLowerCase() && b === b.toUpperCase()) {
    return 0;
  } else if (a === a.toUpperCase() && b === b.toLowerCase()) {
    return 0;
  }
}
*/

/*
//Function that returns the century of a given year//
function century(year) {
  return Math.ceil(year / 100);
}

console.log(century(1705)); //18
*/

/*
//Function that does basic math operations//
function basicOp(operation, value1, value2) {
  return eval(value1 + operation + value2);
}
*/

/*
//Alternative solution//
function basicOp(operation, value1, value2) {
  switch (operation) {
    case "+":
      return value1 + value2;
    case "-":
      return value1 - value2;
    case "*":
      return value1 * value2;
    case "/":
      return value1 / value2;
    default:
      return 0;
  }
}

console.log(basicOp("-", 4, 7)); //11
*/

/*
//Function that calculates the final grade//
function finalGrade(exam, projects) {
  if (exam >= 90 || projects >= 10) {
    return 100;
  } else if (exam >= 75 || projects >= 5) {
    return 90;
  } else if (exam >= 50 || projects >= 2) {
    return 75;
  } else {
    return false;
  }
}
*/

/*
//Alternative solution (The CORRECT solution)//
function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects >= 5) {
    return 90;
  } else if (exam > 50 && projects >= 2) {
    return 75;
  } else {
    return 0;
  }
}
*/

/*
//Function that abbreviates a two word name//
function abbrevName(name) {
  let arr = name.split(" ");
  return arr[0][0].toUpperCase() + "." + arr[1][0].toUpperCase();
}
*/

/*
//Split method//
function spltTest(str) {
  let splitStr = str.split("");
  return splitStr;
}

console.log(spltTest("Hello World"));
*/

/*
//
function past(h, m, s) {
  return (h * 3600 + m * 60 + s) * 1000;
  //Convert hours to seconds, minutes to seconds, and add them together and multiply by 1000 to get milliseconds
}

console.log(past(0, 1, 1)); //61000
*/

/*
//How top invert a number in an array//
function invert(array) {
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(array[i] * -1);
  }
  return newArr;
}

console.log(invert([1, 2, -3, 4, -5])); //[-1, -2, 3, -4, 5]
*/

/*
//Alternative solution//
function invert(array) {
  return array.map((x) => x * -1);
}

console.log(invert([1, 2, -3, 4, -5])); //[-1, -2, 3, -4, 5]
*/

/*
//Divide n by x and y//
function isDivisible(n, x, y) {
  if (n % x === 0 && n % y === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(isDivisible(12, 3, 4)); //false
*/

/*
//Function that calcualtes an average of an array with empty array being 0//
function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / array.length;

  if (array.length === 0) {
    return 0;
  } else {
    return avg;
  }
}
*/

/*
//Find the average of an array//
function findAverage(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  let avg = sum / array.length;
  return avg || 0;
}

console.log(findAverage([1, 2, 3, 4, 5])); //3
*/

/*
//Function that shows the quarter of the year//
function quarterOf(month) {
  if (month <= 3) {
    return 1;
  } else if (month <= 6) {
    return 2;
  } else if (month <= 9) {
    return 3;
  } else if (month <= 12) {
    return 4;
  }
}
*/

/*
//Alternative solution//
function quarterOf(month) {
  return Math.ceil(month / 3);
}
*/

/*
//Function that returns the number of hotdogs eaten//
function saleHotdogs(n) {
  if (n < 5) {
    return n * 100;
  } else if (n >= 5 && n < 10) {
    return n * 95;
  } else if (n >= 10) {
    return n * 90;
  }
}
*/

/*
//Alternative solution//
function saleHotdogs(n) {
  return n * (n < 5 ? 100 : n < 10 ? 95 : 90);
}
*/

/*
function removeExclamationMarks(s) {
  return s.replace(/!/g, "");
}
*/

/*
//Function that accepts a string parameter and reverses each word in the string. All spaces in the string should be retained.//
function reverseWords(str) {
  let arr = str.split(" ");
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i].split("").reverse().join(""));
  }
  return newArr.join(" ");
}
*/

/*
//Alternative solution//
function reverseWords(str) {
  return str
    .split(" ")
    .map((x) => x.split("").reverse().join(""))
    .join(" ");
}
*/

/*
//Function that calculates the human,dog, and cat years//
function humanDogYears(humanYears) {
  let dogYears = 0;
  let catYears = 0;

  if (humanYears === 1) {
    dogYears = 15;
    catYears = 15;
  } else if (humanYears === 2) {
    dogYears = 24;
    catYears = 24;
  } else if (humanYears >= 3) {
    dogYears = 24 + (humanYears - 2) * 4;
    catYears = 24 + (humanYears - 2) * 4;
  }
  return [humanYears, dogYears, catYears];
}

console.log(humanDogYears(4));
*/

/*
//Counting sheep//
function warnTheSheep(queue) {
  let sheep = queue.indexOf("wolf");
  if (sheep === queue.length - 1) {
    return "Pls go away and stop eating my sheep";
  } else {
    return `Oi! Sheep number ${queue.length - sheep - 1}! You are about to be eaten by a wolf!`;
  }
}
*/

/*
//Class Testing//
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this._remainingVacationDays = 20;
  }

  get remainingVacationDays() {
    return this._remainingVacationDays;
  }

  takeVacationDays(daysOff) {
    this._remainingVacationDays -= daysOff;
  }
}

let person = new Person("John", 30);
console.log(person);

person.takeVacationDays(5);
console.log(person);

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this._major = major;
    this._courses = [];
  }

  getCourses() {
    return this._courses;
  }

  addCourse(course) {
    this._courses.push(course);
  }
}

let john = new Student("John", 30, "Computer Science");
john.addCourse("CS101");
console.log(john);


Math.floor(Math.random() * 10) + 1;
*/

/*
//Vowel Counter//
function countVowels(string) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (
      string[i] == "a" ||
      string[i] == "e" ||
      string[i] == "i" ||
      string[i] == "o" ||
      string[i] == "u"
    ) {
      count += 1;
    }
  }
  return count;
}

console.log(countVowels("hello")); //2
*/

/*
//Vowel Remover//
function shortcut(string) {
  return string.replace(/[aeiou]/g, "");
}

console.log(shortcut("hello")); //hll
*/

/*
const greeting = "Hello, world!";

function sendGreeting(name) {
  let greeting;
  if (name) {
    greeting = `Hello, ${name}!`;
    return greeting;
  } else {
    return greeting;
  }
}

console.log(sendGreeting());
*/

/*
const inventory = [
  {
    item: "scented candle",
    stock: 48,
  },
  {
    item: "oil diffuser",
    stock: 80,
  },
  {
    title: "tea kettle",
    stock: 16,
  },
];

function getLowStockItems() {
  let lowStock = [];
  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].stock < 50) {
      lowStock.push(inventory[i]);
    }
  }
  return lowStock;
}

console.log(getLowStockItems());
*/

/*
function uniqueLength(nums) {
  if (nums.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;

  while (j < nums.length) {
    if (nums[i] !== nums[j]) {
      i++;
      nums[i] = nums[j];
    }
    j++;
  }
  return i + 1;
}

// Should return 5
const result = uniqueLength([1, 1, 2, 3, 4, 5, 5]);
console.log(result);

// Should return 1
const result2 = uniqueLength([1, 1, 1, 1]);
console.log(result2);
*/

/*
//Plushie Object//

const talkingPlushie = {
  home: "bedroom",
  color: "pink",
  fur: "velvet",

  greet(name) {
    console.log(`Hello ${name}!`);
  },

  introduce() {
    console.log(`I am a talking plushie. I live in the ${this.home}.`);
  },

  appearance() {
    console.log(`I am ${this.color} and covered in ${this.fur}.`);
  },
};

talkingPlushie.greet("John");
talkingPlushie.introduce();
talkingPlushie.appearance();
*/

/*
//Deans List//

const students = [
  { name: "Paisley Parker", gpa: 4.0 },
  { name: "Lake Herr", gpa: 3.2 },
  { name: "Promise Lansing", gpa: 3.9 },
  { name: "Friar Park", gpa: 2.8 },
  { name: "Mason Amitie", gpa: 3.49 },
];

function getDeansList(studentsList) {
  let deansList = [];
  for (let i = 0; i < studentsList.length; i++) {
    if (studentsList[i].gpa >= 3.5) {
      deansList.push(studentsList[i]);
    }
  }
  return deansList;
}

console.log(getDeansList(students));
*/

/*
//Palindrome//

function checkPalindrome(str) {
  let reverseString = str.split("").reverse().join("");
  if (str === reverseString) {
    return `The word or sentence, "${str}", is a palindrome!`;
  } else {
    return `The word or sentence, "${str}", is not a palindrome.`;
  }
}

console.log(checkPalindrome("racecar"));
*/

/*
// Generate a random hexadecimal string//
const generateBackgroundColor = () => {
  const hexadecimals = "0123456789ABCDEF";
  let randomHexString = "#";
  for (let i = 0; i < 6; i++) {
    const randomHexChar =
      hexadecimals[Math.floor(Math.random() * hexadecimals.length)];
    randomHexString += randomHexChar;
  }
  return randomHexString;
};

// Grab the element with ID #colorBtn from the DOM
const colorBtn = document.querySelector("#colorBtn");

// Change the background color and display the color on the page
const changeColor = () => {
  const randomBackgroundColor = generateBackgroundColor();
  document.body.style.backgroundColor = randomBackgroundColor;
  document.querySelector("#randomColorText").innerHTML = randomBackgroundColor;
};

// Write your event handler here
colorBtn.addEventListener("click", changeColor);
*/

/*
let cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];


//Traditional Way//
let cars1 = cars[0]; //BMW
let cars2 = cars[1]; //Volvo
let cars3 = cars[2]; //Saab
let cars4 = cars[3]; //Ford
let cars5 = cars[4]; //Fiat
let cars6 = cars[5]; //Audi
*/

/*
//Destructuring Way//
let [cars1, cars2, cars3, cars4, cars5, cars6] = cars;

console.log(cars1); //BMW
console.log(cars2); //Volvo
console.log(cars3); //Saab
console.log(cars4); //Ford
console.log(cars5); //Fiat
console.log(cars6); //Audi
*/

/*
//Traditional Way//
let destinations = { x: 1, y: 2, z: 3 };

console.log(destinations); // {x: 1, y: 2, z: 3}

//Destructuring Way//
let { x, y, z } = destinations;

console.log(x); //1
console.log(y); //2
console.log(z); //3
*/


