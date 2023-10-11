//! Question # 1 //
// //? program to display the date
// //? get local machine date time
// const date = new Date();

// //? get the date as a string
// const n = date.toDateString();

// //? get the time as a string
// const time = date.toLocaleTimeString();

// //? display date
// console.log('Date: ' + n);

// //? display time
// console.log('Time: ' + time);  

//! Question # 2 //

// function greetUser(firstName, lastName) {
//     const fullName = `${firstName} ${lastName}`;
//     console.log(`Hello, ${fullName}!`);
//   }
  
//   //? Example usage:
//   const firstName = "sarim";
//   const lastName = "khan";
//   greetUser(firstName, lastName);
  
//! Question # 3 //

// Function to add two numbers
// function addTwoNumbers() {
//     //? Prompt the user for the first number and convert it to a number
//     var num1 = parseFloat(prompt("Enter the first number:"));
  
//     //? Prompt the user for the second number and convert it to a number
//     var num2 = parseFloat(prompt("Enter the second number:"));
  
//     //? Check if the input is valid numbers
//     if (isNaN(num1) || isNaN(num2)) {
//       alert("Please enter valid numbers.");
//     } else {
//       //? Calculate the sum of the two numbers
//       var sum = num1 + num2;
  
//       //? Display the result
//       alert("The sum of " + num1 + " and " + num2 + " is: " + sum);
//     }
//   }
  
//   //? Call the function to add two numbers
//   addTwoNumbers();
  
//! Question # 4 //

// //? Function to perform the desired operation
// function calculate(num1, num2, operator) {
//     switch (operator) {
//       case '+':
//         return num1 + num2;
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         if (num2 !== 0) {
//           return num1 / num2;
//         } else {
//           return "Division by zero is not allowed.";
//         }
//       default:
//         return "Invalid operator";
//     }
//   }
  
//   //? Example usage
//   const num1 = parseFloat(prompt("Enter the first number:"));
//   const num2 = parseFloat(prompt("Enter the second number:"));
//   const operator = prompt("Enter the operator (+, -, *, /):");
  
//   const result = calculate(num1, num2, operator);
  
//   if (typeof result === "number") {
//     document.write(`Result: ${num1} ${operator} ${num2} = ${result}`);
//   } else {
//     document.write(result);
//   }
  

//! Question # 5 //
// //? Function to square the input
// function squareInput() {
//   //? Prompt the user for input
//   let userInput = prompt("Enter a number:");

//   //? Check if the user entered a valid number
//   if (!isNaN(userInput)) {
//     //? Parse the input as a floating-point number and calculate the square
//     let number = parseFloat(userInput);
//     let result = number * number;

//     //? Display the result
//     alert("The square of " + number + " is " + result);
//   } else {
//     //? Display an error message if the input is not a valid number
//     alert("Invalid input. Please enter a valid number.");
//   }
// }

// //? Call the function to square the input
// squareInput();


//! Question # 6 //

// //? Function to compute the factorial of a number
// function computeFactorial() {
//   //? Ask the user for input
//   var userInput = prompt("Enter a number to calculate its factorial:");

//   //? Parse the user input as an integer
//   var number = parseInt(userInput);

//   //? Check if the input is a valid number
//   if (isNaN(number)) {
//     alert("Please enter a valid number.");
//   } else {
//     //? Calculate the factorial
//     var factorial = 1;
//     for (var i = 2; i <= number; i++) {
//       factorial *= i;
//     }

//     //? Display the result
//     alert("The factorial of " + number + " is " + factorial);
//   }
// }

// //? Call the function to compute the factorial
// computeFactorial();

//! Question # 7 //

// function countNumbers() {
//       //? Get start and end numbers from the input fields
//       var start = parseInt(document.getElementById("start").value);
//       var end = parseInt(document.getElementById("end").value);

//       if (isNaN(start) || isNaN(end)) {
//         alert("Please enter valid numbers.");
//         return;
//       }

//       var result = '';
//       for (var i = start; i <= end; i++) {
//         result += i + ', ';
//       }

//       //? Display the counting result in the paragraph
//       document.getElementById("countResult").textContent = "Counting: " + result.slice(0, -2); // Remove trailing comma and space
//     }

//! Question # 8 //

// function calculateHypotenuse() {
//   //? Function to calculate the square of a number
//   function calculateSquare(number) {
//     return number * number;
//   }

//   //? Input by user for base and perpendicular
//   var base = parseFloat(prompt("Enter the length of the base:"));
//   var perpendicular = parseFloat(prompt("Enter the length of the perpendicular:"));

//   //? Check if the inputs are valid numbers
//   if (isNaN(base) || isNaN(perpendicular)) {
//     alert("Please enter valid numbers for base and perpendicular.");
//     return;
//   }

//   //? Calculate the squares of base and perpendicular
//   var baseSquared = calculateSquare(base);
//   var perpendicularSquared = calculateSquare(perpendicular);

//   //? Calculate the hypotenuse squared
//   var hypotenuseSquared = baseSquared + perpendicularSquared;

//   //? Calculate the hypotenuse by taking the square root of the hypotenuseSquared
//   var hypotenuse = Math.sqrt(hypotenuseSquared);

//   //? Display the result to the user
//   alert("The hypotenuse of the right-angled triangle is: " + hypotenuse);
// }

// //? Call the outer function to start the computation
// calculateHypotenuse();

//! Question # 9 //

// //? Function to calculate the area of a rectangle with arguments as values
// function calculateRectangleAreaWithValue(width, height) {
//   return width * height;
// }

// //? Function to calculate the area of a rectangle with user input
// function calculateRectangleAreaWithUserInput() {
//   //? Prompt the user for the width and height of the rectangle
//   let width = parseFloat(prompt("Enter the width of the rectangle:"));
//   let height = parseFloat(prompt("Enter the height of the rectangle:"));

//   //? Check if the user entered valid numbers
//   if (isNaN(width) || isNaN(height)) {
//     return "Invalid input. Please enter valid numbers.";
//   } else {
//     return width * height;
//   }
// }

// //? Example of using the function with arguments as values
// let area1 = calculateRectangleAreaWithValue(5, 10);
// console.log("Area with values:", area1);

// //? Example of using the function with user input
// let area2 = calculateRectangleAreaWithUserInput();
// console.log("Area with user input:", area2);

//! Question # 10 //

// function isPalindrome(str) {
//   //? Remove non-alphanumeric characters and convert to lowercase
//   const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

//   //? Reverse the cleaned string
//   const reversedStr = cleanStr.split('').reverse().join('');

//   //? Check if the original and reversed strings are the same
//   return cleanStr === reversedStr;
// }

// //? Example usage:
// const userInput = "madam";
// if (isPalindrome(userInput)) {
//   console.log(userInput + " is a palindrome");
// } else {
//   console.log(userInput + " is not a palindrome");
// }

//! Question # 11 //

// function capitalizeFirstLetterOfEachWord(inputString) {
//   //? Split the input string into words
//   const words = inputString.split(' ');

//   //? Capitalize the first letter of each word
//   const capitalizedWords = words.map(word => {
//     if (word.length > 0) {
//       return word.charAt(0).toUpperCase() + word.slice(1);
//     } else {
//       return word; // Handle empty strings
//     }
//   });

//   //? Join the capitalized words back into a single string
//   const resultString = capitalizedWords.join(' ');

//   return resultString;
// }

// //? Example usage:
// const inputString = 'the quick brown fox';
// const result = capitalizeFirstLetterOfEachWord(inputString);
// console.log(result); // Output: 'The Quick Brown Fox'

//! Question # 12 //

// function findLongestWord(str) {
//   //? Split the input string into an array of words
//   var words = str.split(' ');

//   //? Initialize variables to keep track of the longest word and its length
//   var longestWord = '';
//   var maxLength = 0;

//   //? Iterate through the array of words
//   for (var i = 0; i < words.length; i++) {
//     var currentWord = words[i];
//     //? Remove punctuation and special characters (if needed)
//     currentWord = currentWord.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, '');
//     if (currentWord.length > maxLength) {
//       maxLength = currentWord.length;
//       longestWord = currentWord;
//     }
//   }

//   return longestWord;
// }

// //? Get user input
// var userInput = prompt('Enter a string:');

// //? Call the function and display the result
// var longest = findLongestWord(userInput);
// if (longest !== '') {
//   alert('The longest word in the string is: ' + longest);
// } else {
//   alert('No words found in the string.');
// }

//! Question # 13 //

// function countOccurrences(str, letter) {
//   //? Initialize a variable to keep track of the count
//   let count = 0;

//   //? Loop through the string character by character
//   for (let i = 0; i < str.length; i++) {
//     //? Check if the current character is equal to the specified letter
//     if (str[i] === letter) {
//       //? If they match, increment the count
//       count++;
//     }
//   }

//   //? Return the final count
//   return count;
// }

// //? Example usage:
// const inputString = 'JSResourceS.com';
// const inputLetter = 's'; // You can change this to any letter you want to count

// const result = countOccurrences(inputString, inputLetter);
// console.log(`The letter "${inputLetter}" appears ${result} times in the string "${inputString}".`);

//! Question # 14 //

// //? Function to calculate the circumference of a circle
// function calcCircumference(radius) {
//   if (radius <= 0) {
//     console.log("Please enter a valid positive radius.");
//   } else {
//     const circumference = 2 * Math.PI * radius;
//     console.log("The circumference is " + circumference.toFixed(2));
//   }
// }

// //? Function to calculate the area of a circle
// function calcArea(radius) {
//   if (radius <= 0) {
//     console.log("Please enter a valid positive radius.");
//   } else {
//     const area = Math.PI * Math.pow(radius, 2);
//     console.log("The area is " + area.toFixed(2));
//   }
// }

// //? Example usage:
// const userRadius = parseFloat(prompt("Enter the radius of the circle:"));
// calcCircumference(userRadius);
// calcArea(userRadius);
