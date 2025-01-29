// console.log("Hello assignment 11 (Chapter 21-25)");





// 1. Write a program that takes two user inputs for first and last name using prompt and merge them in a new variable titled fullName. Greet the user using his full name.

// var firstName = prompt("Enter your fist name!")
// var lastName = prompt("Enter your Last name!")

// alert("Your full name is " + firstName + lastName)






// 2. Write a program to take a user input about his favorite mobile phone model. Find and display the length of user input in your browser


// var input = prompt("Enter your favourite mobile model");

// console.log(input);
// console.log( "The length of your string is ", input.length);






// 3. Write a program to find the index of letter “n” in the word “Pakistani” and display the result in your browser .

// var country = "Pakistani";
// console.log(country.indexOf("n"));





// 4. Write a program to find the last index of letter “l” in the word “Hello World” and display the result in your browser.

// var greeting = "Hello World";

// console.log(greeting.lastIndexOf("l"));
// console.log(greeting.slice(9));





// 5. Write a program to find the character at 3rd index in the word “Pakistani” and display the result in your browser.

// var country = "Pakistan";
// console.log("Character at 4 index is =>",country.charAt(4));





// 6. Repeat Q1 using string concat() method.

// var firstName = prompt("Enter your fist name!")
// var lastName = prompt("Enter your Last name!")

// alert(firstName.concat(lastName))







// 7. Write a program to replace the “Hyder” to “Islam” in the word “Hyderabad” and display the result in your browser.

// var city = "Hyderabad"

// console.log("city =>", city);
// console.log("After replace =>",city.replace("Hyder", "Islam"));







// 8. Write a program to replace all occurrences of “and” in the string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and football together.”;


// var str = "Ali and Sami are best friends. They play cricket and football together."

// console.log("Original string =>",str);
// console.log("Replaced string =>",str.replaceAll("and", "&"));






// 9. Write a program that converts a string “472” to a number 472. Display the values & types in your browser.

// var str = "472"

// console.log(str);
// console.log(typeof str);
// var number = Number(str);

// console.log(number);
// console.log(typeof number);






// 10.   Write a program that takes user input. Convert and show the input in capital letters.

// var cityName = prompt("Enter your city name")

// console.log(cityName.toUpperCase(z));






// 11.    Write a program that takes user input. Convert and show the input in title case.

// var cityName = prompt("Enter your city name")

// var upper = cityName[0].toUpperCase()

// console.log(cityName);
// console.log(upper + cityName.slice(1));







// 12.    Write a program that converts the variable num to string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.


// var num = 35.36;

// console.log(num.toString());







// 13.    Write a program to take user input and store username in a variable. If the username contains any special symbol among [@ . , !], prompt the user to enter a valid username. For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64


// var userName = prompt("Enter User Name");

// if (userName.includes("@") || userName.includes(".") || userName.includes(",") || userName.includes("!")) {
//     console.log("Invalid User Name");
// }else {
//     console.log(userName);
// }

// ***********Alternative**************

// var isMatch = false;

// for (var i = 0; i < userName.length; i++) {
//     if (userName[i] === "@" || userName[i] === "," || userName[i] === "." || userName[i] === "!") {
//         isMatch = true;
//         console.log("Invalid User Name");
//     }
// }

// if(isMatch == false) {
//     console.log(userName);
// }









// 14.    You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an array. After searching, prompt the user whether the given item is found in the list or not.
// Note: Perform case insensitive search. Whether the user enters cookie, Cookie, COOKIE or coOkIE, program should inform about its availability.


// var arr = ["cake", "apple pie", "cookie", "chips", "patties"]

// var userInput = prompt("Enter Here").toLowerCase();
// if(arr.includes(userInput)) {
//     console.log(userInput.toUpperCase() + " is available on index " + arr.indexOf(userInput));
// } else {
//     console.log(userInput.toUpperCase() + " is not avilable in array");
// }







// 15.    Write a program to take password as an input from user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements, prompt the user to enter a valid password
// Answer

// var password = prompt("Enter your 6 gigits password")
// // console.log(/\d/.test(password));
// // console.log(/[a-zA-Z]/.test(password));

// var hasAlpha = false;
// var hasNumber = false;

// for (var i = 0; i < password.length; i++) {
//     if(/[a-zA-Z]/.test(password[i])) {
//         hasAlpha = true;
//     }

//     if (/\d/.test(password[i])) {
//         hasNumber = true;
//     }
// }

// var statrtsWith = /\d/.test(password[0]);
// // var statrtsWith = /^\d/.test(password);


// if (hasAlpha == true && hasNumber == true && statrtsWith == false && password.length <= 6) {
//     alert("Password is valid. Successfully set!");
// }else if (password == "") {
//     alert("Enter Password!!");
// }else{
//     alert("Invalid password. Please ensure the password meets the following requirements:\n" + 
//         "a. It should contain alphabets and numbers\n" + 
//         "b. It should not start with a number\n" + 
//         "c. It must be at least 6 characters long");
// }












// 16.    Write a program to convert the following string to an array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

// var str = "University of Karachi";

// var arr = str.split("");

// for(var i = 0; i < arr.length; i++) {
//     document.write(arr[i] + "<br />")
// }







// 17.    Write a program to display the last character of a user input

// var userInput = prompt("Enter Anything here");

// var lastCharacter = userInput.charAt(userInput.length - 1)
// console.log("The last character is:", lastCharacter);








// 18.   You have a string “The quick brown fox jumps over the lazy dog”. Write a program to count number of occurrences of word “the” in given string.

// var str = "The quick brown fox jumps over the lazy dog"

// var arr = str.split(" ")
// var n = 1;

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i].toLowerCase() == "the") {
//         console.log(n++);        
//     }
// }