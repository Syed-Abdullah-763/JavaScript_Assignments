// console.log("Hello assignment 14");




// 1. Write a function that displays current date & time in your browser.

// function date() {
//     var now = new Date ()

//     console.log(now);
// }

// date()






// 2. Write a function that takes first & last name and then it greets the user using his full name.

// function greet(firstName, lastName) {
//     console.log(`Hello ${firstName} ${firstName}!`);
// }
// greet(prompt("Enter first name"), prompt("Enter last name"))






// 3. Write a function that adds two numbers (input by user) and returns the sum of two numbers.

// function add(num1, num2) {

//     return num1 + num2
// }
// var result = add(+prompt("Enter first number"), +prompt("Enter second number"))
// console.log(result);





// 4. Calculator:
// Write a function that takes three arguments num1, num2 & operator & compute the desired operation. Return and show the desired result in your browser.

// function calc (num1, opt, num2) {
//     if(opt == "+") {

//         return num1 + num2

//     }else if(opt == "-") {

//         return num1 - num2

//     }else if(opt == "*") {

//         return num1 * num2

//     }else if(opt == "/") {

//         return num1 / num2
//     }
// }

// var result = calc(+prompt("Enter first number"), prompt("Enter operator"), +prompt("Enter second number"))

// console.log(result);






// 5. Write a function that squares its argument.

// function square (number) {
//     return number * number
// }

// var result = square(+prompt("Enter a number"))

// console.log(result);





// 6. Write a function that computes factorial of a number.

// function factorial(num) {
//     if (num <= 1) {
//         return 1;
//     }
//     return num * factorial(num - 1);
// }

// var result = factorial(5)

// console.log(result);






// 7. Write a function that take start and end number as inputs & display counting in your browser.

// function count(start, end) {
//     for(var i = start; i <= end; i++) { 
//         console.log(i);

//     }
// }

// count(10, 15)





// 8. Write a nested function that computes hypotenuse of a right angle triangle. 
// Hypotenuse2 = Base2 + Perpendicular2
// Take base and perpendicular as inputs.
// Outer function : calculateHypotenuse()
// Inner function: calculateSquare()



// function hyp (per, base) {
//     function sqr (num) {
//         return num * num
//     }

//     var hypotenuse = Math.sqrt(
//         sqr(per) + sqr(base)
//     );

//     return hypotenuse
// }

// var result = hyp(3,4)

// console.log(result);








// 9. Write a function that calculates the area of a rectangle.
// A = width * height
// Pass width and height in following manner:
// i.  Arguments as value
// ii.  Arguments as variables

// function area(width, height) {

//     return width * height
// }

// var result = area(10, 20)

// console.log("area = ", result);







// 10. Write a JavaScript function that checks whether a passed string is palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam.

// function isPalindrome (str) {
//     var cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
//     // console.log(cleanStr);

//     var reverseStr = cleanStr.split("").reverse().join("");
//     // console.log(reverseStr);

//     return cleanStr === reverseStr;
// }
// isPalindrome("@Ma@dam")

// var result = isPalindrome("@Ma@dam");

// console.log(result);






// 11.    Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. 
// EXAMPLE STRING : 'the quick brown fox'
// EXPECTED OUTPUT : 'The Quick Brown Fox'


// function upperCaseFirstLetter(str) {

//     var splitWords = str.split(" ");
//     // console.log(splitWords);

//     tempArr = []
//     for (var i = 0; i < splitWords.length; i++) {

//        tempArr.push(splitWords[i][0].toUpperCase() + splitWords[i].slice(1).toLowerCase());
//     }

//     return tempArr.join(" ")
    
// }

// var result = upperCaseFirstLetter("the quick brown fox");
// console.log(result);


// -----------------OR--------------


// function upperCaseFirstLetter(str) {

//     var splitWords = str.split(" ");
//     // console.log(splitWords);

//     var capitalizedWords = splitWords.map(function (word) {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
    
//     return capitalizedWords.join(" ")
// }

// var result = upperCaseFirstLetter("the quick brown fox");
// console.log(result);








// 12. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. EXAMPLE STRING : 'Web Development Tutorial' EXPECTED OUTPUT : 'Development'

// function longestWord (str) {
//     var splitWords = str.split(" ");

//     var longestWord = "";

//     for (var i = 0; i < splitWords.length; i++) {

//         if(splitWords[i].length > longestWord.length) {
//             longestWord = splitWords[i]
//         }
//     }

//     return longestWord;
// }

// var result = longestWord("Web Development Turorial")
// console.log(result);






// 13. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. Sample arguments : 'JSResourceS.com', 'o'


// function countLetter (word, letter) {

//     var splitWord = word.split("");
//     var number = 0;

//     for(var i = 0; i < splitWord.length; i++) {

//         if(splitWord[i].toLowerCase() === letter.toLowerCase()) {
//             number = number + 1
//         }
//     }

//     return letter + " used " + number + " times in word.";
// }

// var result = countLetter("JSResourceS.com", "e");

// console.log(result);

// ----------OR----------

// function countLetter (str, letter) {
//     var ocurrences = str.split("").filter(function (char) {
//         return letter === char;
//     }) ;

//     return ocurrences.length;
// }

// var result = countLetter("JSResourceS.com", "e");
// console.log(result);







// 14. The Geometrizer
// Create 2 functions that calculate properties of a circle, using 
// the definitions here.

// i) Create a function called calcCircumference:
// •  Pass the radius to the function.
// •  Calculate the circumference based on the radius, and output "The circumference is NN".
// Circumference of circle    =     2πr

// function calcCircumference(radius) {

//     return 2 * Math.PI * radius;
// }
// var result = calcCircumference(5);
// console.log("Circumference is: ",result);




// Create a function called calcArea:
// •     Pass the radius to the function.
// •     Calculate the area based on the radius, and output "The area is NN".
// Area of circle =     πr2


// function calcArea(radius) {

//     return Math.PI * (radius*radius);
// }
// var result = calcArea(5);
// console.log("Area is: ",result);
