// A
console.log("Hello");
console.log("John");
console.log('You can call me "Santy"');
console.log("Go away, I'm coding");
console.log(`I am sorry\nplease forgive me`);

//B, what is output display
let number1 = 3;
let number2 = 9;
let number3 = 7;
let number4 = 6;
let number5 = 2;
console.log(number1 + number2 - (number3 * number4) / number5);
console.log(number1 + ((number2 - number3) * number4) / number5);

//C
let conditionA = true;
let conditionB = false;
let conditionC = true;
let conditionD = false;
console.log((conditionA && conditionB) || (conditionC && !conditionD));

//D
let age = 9;
let result = age > 17 ? "Adults" : age > 10 ? "Teengers" : "Children";
console.log(result);

//E
let numA = 176;
let numB = 103;
console.log(numA & numB);
console.log(numA | numB);
console.log(numA ^ numB);
console.log(numA >> 2);
console.log(numB >> 2);
console.log(numA << 2);
console.log(numB << 2);

let numC = 1;
console.log(numC << 1);
console.log(numC << 2);
console.log(numC << 3);
console.log(numC << 4);
console.log(numC << 5);
console.log(numC << 6);
console.log(numC << 7);
console.log(numC << 8);
/**
 * Analysis
 * This code performs bitwise operations on numA, numB, and numC using bitwise AND (&), OR (|), XOR (^), right shift (>>), and left shift (<<)
 * Bitwise AND (&) is used to compare individual bits where only overlapping 1s result in 1.
 * Bitwise OR (|) results in 1 if either bit is 1.
 * Bitwise XOR (^) results in 1 where the bits differ.
 * Right shift (>>) effectively divides the number by powers of two for each bit shifted.
 * Left shift (<<) multiplies the number by powers of two for each bit shifted.
 * Bitwise operations compare bits at a binary level and produce unique results based on bit patterns.
 * Left shifts multiply numbers by powers of two, while right shifts divide them by powers of two.
 * Left shifting 1 multiplies its value exponentially, making it a powerful tool for handling binary data.
 */

//F
let fullName = (fn, mn, ln) => {
  return `${fn}${mn}${ln}, ${getTitle()}`;
};
let getTitle = () => {
  return "B.Sc";
};
console.log(fullName("John", "Dream", "Myung"));
/**
 * Analysis
 * This code consists of two functions, fullName and getTitle, which work together to create a formatted full name with a title. The getTitle function provides a static title, while fullName takes dynamic inputs for the names.
Return Values:
getTitle always returns "B.Sc".
fullName returns a string formatted with the first, middle, and last names, followed by the title.
This code effectively demonstrates the use of arrow functions, template literals, and function calls in JavaScript. */

//G
// Example with ==
let a = "5"; // a is a string
let b = 5; // b is a number

console.log(a == b); // Output: true (type coercion occurs, "5" is converted to 5)

// Example with ===
console.log(a === b); // Output: false (no type coercion, string "5" is not the same as number 5)

// Further examples
let c = 0; // c is a number
let d = false; // d is a boolean

console.log(c == d); // Output: true (0 is coerced to false)
console.log(c === d); // Output: false (different types)

let e = null; // e is null
let f = undefined; // f is undefined

console.log(e == f); // Output: true (null == undefined)
console.log(e === f); // Output: false (different types)
