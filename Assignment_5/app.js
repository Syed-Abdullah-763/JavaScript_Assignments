// console.log("Hello assignment 5");



// 1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.

// var num1 = 10;
// var num2 = 20;

// var sum = num1 + num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + sum);







// 2. Repeat task1 for subtraction, multiplication, division & modulus.

// // subtraction 
// var num1 = 10;
// var num2 = 20;

// var sub = num1 - num2;

// document.write("difference of " + num1 + " and " + num2 + " is " + sub);


// Multiplication
// var num1 = 10;
// var num2 = 20;

// var mul = num1 * num2;

// document.write("multiplication of " + num1 + " and " + num2 + " is " + mul);


// division
// var num1 = 10;
// var num2 = 20;

// var div = num1 / num2;

// document.write("division of " + num1 + " and " + num2 + " is " + div);



// Moud
// var num1 = 10;
// var num2 = 20;

// var moud = num1 % num2;

// document.write("moud of " + num1 + " and " + num2 + " is " + moud);










// 3. Do the following using JS Mathematic Expressions
// a. Declare a variable.
// b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// c. Initialize the variable with some number.
// d. Show the value of variable in your browser like “Initial value: 5”.
// e. Increment the variable.
// f. Show the value of variable in your browser like “Value after increment is: 6”.
// g. Add 7 to the variable.
// h. Show the value of variable in your browser like “Value after addition is: 13”.
// i. Decrement the variable.
// j. Show the value of variable in your browser like “Value after decrement is: 12”.
// k. Show the remainder after dividing the variable’s value by 3. 
// l. Output : “The remainder is : 0”.




// var num;
// document.write("Value after variable declarartion is " + num + "<br />");

// num = 5;
// document.write("Initial value: " + num + "<br />");

// num++;
// document.write("Value after increment is: " + num + "<br />");

// num = num + 7;
// document.write("Value after +7 is: " + num + "<br />");


// num--;
// document.write("Value after decreament is: " + num + "<br />");


// num = num % 3;
// document.write("The remainder is : " + num + "<br />");







// 4. Cost of one movie ticket is 600 PKR. Write a script to store
// ticket price in a variable & calculate the cost of buying 5 tickets

// var price = 600;
// var quantity = 5;
// var total = price * quantity + "PKR";

// document.write ("Total cost of " + quantity + " tickets is " + total)








// 5. Write a script to display multiplication table of any number in your browser.

// var table = 2;
// var startingPoint = 4;
// var endingPoint = 10;

// for(var i = startingPoint; i <= endingPoint; i++) {
//     document.write(table + " X " + i + " = " + i*table + "<br />")
// }






// 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.
// a.  Store a Celsius temperature into a variable.
// b. Convert it to Fahrenheit & output “NNoC is NNoF”.
// c. Now store a Fahrenheit temperature into a variable.
// d. Convert it to Celsius & output “NNoF is NNoC”.

// Answer

// var celsius = 20;
// var fer = (celsius * 9 / 5) + 32;
// console.log(celsius + "C = " + fer + "F");


// var fahrenheit = 305;
// var cel = (fahrenheit - 32) * 5 / 9;
// console.log(fahrenheit + "F = " + cel + "C");






// 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
// a. Price of item 1
// b. Price of item 2
// c. Ordered quantity of item 1
// d. Ordered Quantity of item 2
// e. Shipping charges
// Compute the total cost & show the receipt in your browser.

// Answer

// var priceItem1 = 567;
// var quantityItmen1 = 5;
// var totalItem1 = priceItem1 * quantityItmen1;

// console.log("Price of Item 1 is " + priceItem1 + "Rs");
// console.log("Quantity of Item 1 is " + quantityItmen1);


// var priceItem2 = 988;
// var quantityItmen2 = 10;
// var totalItem2 = priceItem2 * quantityItmen2;

// console.log("Price of Item 2 is " + priceItem2 + "Rs");
// console.log("Quantity of Item 2 is " + quantityItmen2);


// var total = totalItem1 + totalItem2;

// console.log("Grand total is " + total + "Rs");





// 8. Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

// Answer

// var totalMarks = 550;
// var obtainedMarks = 474;
// var percentage = (obtainedMarks / totalMarks) * 100;

// console.log(totalMarks);
// console.log(obtainedMarks);
// console.log(percentage + " %");







// 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)

// Answer

// var currency = (10 * 104.80) + (25 * 28);

// console.log(currency + "PKR");






// 10. Write a program to initialize a variable with some number and do arithmetic in following sequence:
// a. Add 5
// b. Multiply by 10
// c. Divide the result by 2
// Perform all calculations in a single expression

// Answer

// var num = ((5 + 5) * 10) / 2;
// console.log(num);







// 11.  The Age Calculator: Forgot how old someone is? Calculate it!
// a. Store the current year in a variable.
// b. Store their birth year in a variable.
// c. Calculate their 2 possible ages based on the stored values.
// Output them to the screen like so: “They are either NN or NN years old”.

// Answer

// var currentYear = 2025;
// var birthYear = 2007;

// var age1 = currentYear - birthYear;

// console.log("They are " + age1 +  "year old.");








// 12. The Geometrizer: Calculate properties of a circle. 
// a. Store a radius into a variable.
// b. Calculate the circumference based on the radius, and output “The circumference is NN”.
// (Hint : Circumference of a circle = 2 π r , π = 3.142)
// Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142)


// Answer

// var radius = 5;
// var radius2 = radius * radius;
// console.log(radius);
// console.log(radius2);

// var circumference = 2 * 3.142 * radius;
// console.log(circumference);

// var area = 3.142 * radius2;
// console.log(area);








// 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
// a. Store your favorite snack into a variable
// b. Store your current age into a variable.
// c. Store a maximum age into a variable.
// d. Store an estimated amount per day (as a number).
// e. Calculate how many would you eat total for the rest of your life.
// Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”.

// Answer

var snack = "chocholate";

var age = 17;
var days = 365 * age;

var max = 30;
var max_days = 365 * max;

var left_days = max_days - days;
var amount = 2;
var amount_need = left_days / amount;

console.log( "You will need " + amount_need + " Chocholates");
