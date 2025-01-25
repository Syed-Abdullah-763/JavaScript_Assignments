// console.log("Hello Assignment 7");




// 1. Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: 
// “Welcome to city of lights”

// var city = prompt("Enter your city name");

// if (city.toLowerCase() == "karachi") {
//     alert("Welcome to the city of light");
// }







// 2. Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender").toLowerCase();

// if (gender == "male") {
//     alert("God Morining Sir.");
// }else if (gender == "female") {
//     alert("Good Morning Ma'am");
// }else {
//     alert("Your Input is in valid");
// }








// 3. Write a program to take input color of road traffic signal from the user & show the message according to this table

// var colour = prompt("Enter colour").toLowerCase();

// if(colour === "red") {
//     console.log("Must Stop");

// }else if (colour === "yellow") {
//     console.log("Ready to move");
// }else if (colour === "green") {
//     console.log("Move now");
// }else {
//     alert("your colour is not found");
// }








// 4. Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var userInput = +prompt("How much (litres) fuel remains in your car?");

// if (userInput <= 0.25) {
//     alert("Refill your tank.");
// }else {
//     console.log("You can drive more.");
// }








// 5. Run this script, & check whether alert message would be displayed or not.Record the outputs.


// a.
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
//     console.log(("This condition is true."));

// }



// b.
// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
//     console.log("This condion is false.");
// }



// c.
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
//     console.log("this condition is false.");
// }
// if (c === 13) {
//     alert("condition 2 is true");
//     console.log("This true bcz the inrement is applied above.");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
//     console.log("This condion is false, because the value of is is now 14 because of post increment");  
// }
// if (c === 14) {
//     alert("condition 4 is true");
//     console.log("Condition is true now");
// }



// d.
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;

// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
//     console.log("Conditio is true");
// }



// e.
// if (true) { 
//     alert("True");
//     console.log("condition is true");
     
// }
// if (false) { 
//     alert("False"); 
//     console.log("condition is false");
// }



// f.
// this condition checks the alphabetical order of c then a then r and t.
// if ("car" < "cat") {
//     alert("car is smaller than cat");
//     console.log("This compares the strings "/car/" and "/cat/" lexicographically. Since "/car/" comes before "/cat/" in alphabetical order, the condition is true and the alert will be triggered");
// }








// 6. Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table

// var sub1 = +prompt("Enter physics number");
// var sub2 = +prompt("Enter chemistry number");
// var sub3 = +prompt("Enter math number");

// var total = sub1 + sub2 + sub3; 

// var percentage = total / 300 * 100;

// if(percentage >= 80 && percentage <= 100) {
//     console.log( percentage ," A+");
// }else if (percentage >= 70 && percentage < 80) {
//     console.log( percentage," A");
// }else if (percentage >= 60 && percentage < 70) {
//     console.log(percentage, " B");
// }else if (percentage >= 40 && percentage < 60) {
//     console.log(percentage, " C");
// }else if (percentage >= 0 && percentage < 40) {
//     console.log(percentage, " Fail");
// }else {
//     alert("Input is not correct");
// }








// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct answer”.
// b. If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


// var num = 6;
// var userInput = +prompt("Enter your number");

// if(userInput == num) {
//     console.log("Match");
// }else if (userInput + 1 == num || userInput - 1 == num) {
//     console.log("Close");
// }else {
//     console.log("Better luck, try again");
// }








// 8. Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num = +prompt("Enter a number:"); 

// if(num % 3 === 0) {
//     alert("true")
// }else{
//     alert("false")
// }






// 9. Write a program that checks whether the given input is an even number or an odd number.

// var num = +prompt("Enter a number")

// if (num % 2 == 0) {
//     console.log(num + " is even number");
// }else {
//     console.log(num +" is odd number");
// }







// 10.   Write a program that takes temperature as input and shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// var temp = +prompt("Enter the temperature.");

// if (temp > 40) {
//     console.log("It's too hot outside");
    
// }else if (temp > 30 && temp < 40) {
//     console.log("The weather today is normal");
    
// }else if (temp > 20 && temp < 30) {
//     console.log("Today's weather is too cool");
    
// }else if (temp > 10 && temp < 20) {
//     console.log("OMG! Today’s weather is so Cool.");   
// }





// 11.    Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.


// var num1 = +prompt("Enter first number");
// var opt = prompt("Enter the operator");
// var num2 = +prompt("Enter second number");

// if (typeof num1 == "number" && typeof num2 == "number" && opt == "+" || opt == "-" || opt == "*" || opt == "/") {
//     if (opt == "+") {
//         console.log(num1 + num2);
//     }else if (opt == "-") {
//         console.log(num1 - num2);
//     }else if (opt == "*") {
//         console.log(num1 * num2);
//     }else if (opt == "/") {
//         console.log(num1 / num2);
//     }

// }else {
//     console.log("Syntax error");
    
// }