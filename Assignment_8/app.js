// console.log("Hello assignment 8");





// 1. Write a program that takes a character (number or string) in a variable & checks whether the given input is a number, uppercase letter or lower case letter. (Hint: ASCII codes:- A=65, Z=90, a=97, z=122)


// var value = prompt("Enter string or number");
// var value = +prompt("Enter string or number");

// if (typeof value == "number") {
//     console.log(value, "is a number");
// }else if (value == value.toLowerCase()) {
//     console.log(value, "=> is in lower case");
    
// }else if (value == value.toUpperCase()) {
//     console.log(value, "=> is in upper case");
// }






// 2. Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal

// var int1 = 10;
// var int2 = 20;

// if (int1 == int2) {
//     console.log("values are equal");
// }else if (int1 > int2) {
//     console.log("1st one is greater");
// }else {
//     console.log("2nd one is greater");
// }







// 3. Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var num = +prompt("Enter a number");

// if (num > 0) {
//     console.log("value is positive");
// }else if (num < 0) {
//     console.log("value is negative");
// }else {
//     console.log("value is zero");
    
// }






// 4. Write a program that takes a character (i.e. string of length 1) and returns true if it is a vowel, false otherwise

// var user = prompt("Enter one character").toLowerCase();

// if (user.charAt(0) == "a" || user.charAt(0) == "e" || user.charAt(0) == "i" || user.charAt(0) == "o" || user.charAt(0) == "u") {
//     console.log("False");
// }else {
//     console.log("true");
    
// }






// 5. Write a program that
// a. Store correct password in a JS variable.
// b.  Asks user to enter his/her password
// c.  Validate the two passwords:
// i.    Check if user has entered password. If not, then give message “ Please enter your password”
// ii.    Check if both passwords are same. If they are same, show message “Correct! The password you entered matches the original password”. Show “Incorrect password” otherwise.


// var pass = "Abdullah1118";
// var user_pass = prompt("Enter password");

// if (user_pass == "") {
//     console.log("please enter a password");
    
// }else if (user_pass == pass) {
//     console.log("Correct password");
    
// }else {
//     console.log("incorrect Password");
// }








// 6. This if/else statement does not work. Try to fix it:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// else
// greeting = "Good evening";
// }


// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }else{
// greeting = "Good evening";
// }





// 7. Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements

// var input = prompt("Enter the time in 24-hour format (e.g., 1900 for 7:00 PM):"); 

// var hour = parseInt(input.slice(0, 2));
// var minutes = parseInt(input.slice(2));


// console.log(hour);
// console.log(minutes);


// if (isNaN(hour) || isNaN(minutes) || input.length !== 4 || hour > 24 || minutes > 59) {
//     alert("Invalid time format. Please enter a valid time in 24-hour format (HHMM).");
//   } else {
//     if (hour >= 12 && hour < 24) {
//         hour -= 12;
//         console.log(`${hour}:${minutes}PM`);
//     }else if (hour == 24) {
//         hour = 12;
//         console.log(`${hour}:${minutes}AM`);
//     }
//     else {
//         console.log(`${hour}:${minutes}AM`);
//     }
//   }

