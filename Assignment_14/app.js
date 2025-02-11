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







