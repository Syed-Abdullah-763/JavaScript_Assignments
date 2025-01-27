// console.log("Hello Assignment 10");





// 1. Declare and initialize an empty multidimensional array. 

// var arr = [
//     [],
//     []
// ]





// 2. Declare and initialize a multidimensional array representing the following matrix:

// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ]
// for (var i = 0; i < arr.length; i++) {
//     console.log("Row", i + 1, arr[i]);
// }






// 3. Write a program to print numeric counting from 1 to 10.

// for(var i = 1; i <= 10; i++) {
//     console.log(i);

// }






// 4.  Write a program to print multiplication table of any number using for loop. Table number & length should be taken as an input from user.

// var table = +prompt("Enter table");
// var starting = +prompt("Enter starting point");
// var ending = +prompt("Enter ending point point");

// for(var i = starting; i <= ending; i++) {
//     console.log(table + " X " + i + " = " + table*i);
// }

// for reverse and forward (both) 
// if (starting > ending) {
//     for(var i = starting; i >= ending; i--) {
//         console.log(table + " X " + i + " = " + table*i);

//     }
// }else {
//     for(var i = starting; i <= ending; i++) {
//         console.log(table + " X " + i + " = " + table*i);

//     }
// }








// 5. Write a program to print items of the following array using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"]

// for(var i = 0; i < fruits.length; i++) {
//     console.log(i+1 + ". Element at index" + i + " is " + fruits[i]);
// }






// 6. Generate the following series in your browser. See example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k


// a. 
// for (var i = 1; i <= 15; i++) {
//     console.log(i);
// }


// b. 
// for (var i = 10; i >= 1; i--) {
//     console.log(i);
// }


// c. 
// for (var i = 0; i <= 20; i = i + 2) {
//     console.log(i);
// }


// d.
// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i);
// }


// e. 
// for (var i = 2; i <= 20; i = i + 2) {
//     console.log(i + "k");
// }







// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input” in an array.
// After searching, prompt the user whether the given item is found in the list or not


// var arr = ['cake', "apple pie", "cookie", "chips", "patties"];
// var userInput = prompt("Enter your order here").toLowerCase();

// var indexNumber = arr.indexOf(userInput);
// console.log(indexNumber);
// if (indexNumber == -1) {
//     console.log(`Sorry! "${userInput.toLocaleUpperCase()}" is not available in array.`);
// } else {
//     console.log(`"${arr[indexNumber].toUpperCase()}" is available at ${indexNumber} index.`);
// }

// ******************************OR***************************************

// var isMatch = false;

// for (var i = 0; i < arr.length; i++) {
//     if (userInput === arr[i]) {
//         isMatch = true;

//         console.log(`"${arr[i].toUpperCase()}" is available at ${i} index.`);
//     }
// }

// if(isMatch == false) {
//     console.log(`Sorry! "${userInput.toLocaleUpperCase()}" is not available in array.`);
// }






// 8. Write a program to identify the largest number in the given array.
// A = [24, 53, 78, 91, 12]

// var arr = [24, 53, 78, 91, 12];

// var arr = [24, 53, 15, 78, 91, 12];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[0]) {
//         var largest = arr[i]
//         console.log(largest);
//     }
    
// }
// console.log(largest);



// 9. Write a program to identify the smallest number in the given array.
// A = [24, 53, 78, 91, 12]

// var arr = [24, 53, 15, 78, 91, 12];

// for (var i = 0; i < arr.length; i++) {
//     if (arr[i] < arr[0]) {
//         var smallest = arr[i]
//         console.log(smallest);
//     }
    
// }
// console.log(smallest);





// 10.   Write a program to print multiples of 5 ranging 1 to 100.
// for (var i = 0; i <= 100; i = i + 5) {
//     console.log(i);
// }










// var arr = []
// for (var i = 1; i <= 15; i++) {
//     arr.push(i);
//     console.log(arr);
// }



// var arr = [24, 53, 78, 91, 12];

// var largest = Math.min(...arr);
// console.log(largest);

// var largest = Math.max(...arr);
// console.log(largest);