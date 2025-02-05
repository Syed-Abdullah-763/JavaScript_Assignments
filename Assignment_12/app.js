// console.log("Hello assignment 12");




// 1. Write a program that takes a positive integer from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// var num = +prompt("Enter a decimal number")

// if(num > 0 && /[.]/.test(num)) {

// console.log(num);
// console.log(Math.round(num));
// console.log(Math.floor(num));
// console.log(Math.ceil(num));
// }else{
//     alert("Error")
// }




// 2. Write a program that takes a negative floating point number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number


// var num = +prompt("Enter a decimal number")

// if (num < 0 && /[.]/.test(num)) {

//     console.log(num);
//     console.log(Math.round(num));
//     console.log(Math.floor(num));
//     console.log(Math.ceil(num));
// } else {
//     alert("Error")
// }






// 3. Write a program that displays the absolute value of a number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// var num = parseInt(prompt("Enter integer"))

// if (num < 0) {
//     console.log(Math.abs(num));
// }else {
//     console.log(num);
// }






// 4. Write a program that simulates a dice using random() method of JS Math class. Display the value of dice in your browser.

// var useNum = parseInt(prompt("Enter any number between 1-10"))
// console.log("useNum", useNum);

// var random = Math.floor(Math.random() * 10 + 1);

// console.log("random",random);

// if (random === useNum && useNum < 10 && useNum > 0) {
//     console.log("Mathched");
// }else {
//     console.log("Try again");
// }







// 5. Write a program that simulates a coin toss using random() method of JS Math class. Display the value of coin in your browser

// var random = Math.floor(Math.random() * 2 + 1);

// if (random == 1) {
//     console.log("Heads");
// } else {
//     console.log("Tails");
    
// }




// 6. Write a program that shows a random number between 1 and 100 in your browser.

// var random = Math.floor(Math.random() * 100 + 1);

// console.log("Random number between 1 and 100 is:", random);




// 7. Write a program that asks the user about his weight. Parse the user input and display his weight in your browser. Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms


// var userInput = prompt("Enter your weight (e.g., 50, 50kgs, 50.2kgs, 50.2kilograms):", "00 kgs")
// // console.log(userWeight);

// var weight = parseFloat(userInput.match(/\d+(\.\d+)?/)).toFixed(1)
// // console.log(weight);

// if(!isNaN (weight) && weight != 0) {
//     console.log(`Your weight is: ${weight} kilograms`);
    
// } else {
//     console.log("Your weight is invalid kilograms");
// }





// 8. Write a program that stores a random secret number from 1 to 10 in a variable. Ask the user to input a number between 1 and 10. If the user input equals the secret number, congratulate the user.

// var useNum = parseInt(prompt("Enter any number between 1-10"))
// console.log("useNum", useNum);

// var random = Math.floor(Math.random() * 10 + 1);

// console.log("random",random);

// if (random === useNum && useNum < 10 && useNum > 0) {
//     console.log("Mathched");
// }else {
//     console.log("Try again");
// }