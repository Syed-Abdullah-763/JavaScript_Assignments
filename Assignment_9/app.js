// console.log("Hello Assignment 9");




// 1. Declare an empty array using JS literal notation to store student names in future.

// var arr = []




// 3. Declare and initialize a strings array.

// var arr = ["Karachi", "Karachi", "Karachi"];



// 4.  Declare and initialize a numbers array.

// var arr = [1,2,3,4,5,6]



// 5.  Declare and initialize a boolean array

// var arr = [true, false]





// 6. Declare and initialize a mixed array.

// var arr = ["karachi", 1, 4, 6, true];




// 7. Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD).

// var edu = ["SSC", "HSC", "BSC", "BS", "BCOM"]




// 8. Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like

// var std = ["Abdullah", "Haseeb", "Hasnain"]
// var score = [450, 400, 350]

// var percentage1 = score[0] / 500 *100
// var percentage2 = score[1] / 500 *100
// var percentage3 = score[2] / 500 *100

// console.log(std[0], score[0], percentage1 + "%");
// console.log(std[2], score[1], percentage2 + "%");
// console.log(std[1], score[2], percentage3 + "%");






// 9. Initialize an array with color names. Display the array elements in your browser.
// a. Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
// c. Add two more color to the beginning of the array. Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated array in your browser.
// e. Delete the last color in the array. Display the updated array in your browser.
// f. Ask the user at which index he/she wants to add a color & color name. Then add the color to desired 
// position/index. 



// var color = ["red", "green", "black"];
// console.log(color);


// color.unshift(prompt("What color do you want to add?"))
// console.log(color);


// color.push(prompt("What color do you want to add?"))
// console.log(color);


// color.unshift("Purple")
// color.unshift("gray")
// console.log(color);


// color.shift()
// color.shift()
// console.log(color);


// color.pop()
// color.pop()
// console.log(color);


// var index = parseInt(prompt("Index"));
// var colorName = prompt("Color Name").toLowerCase();

// if (index >= 0 && index < color.length) {
//     color.splice(index, 0, colorName)
// }
// console.log(color);


// var index = parseInt(prompt("Index"));
// var deleteCount = parseInt(prompt("Delete Count"));

// if (index >= 0 && index < color.length) {
//     color.splice(index, deleteCount,)
// }
// console.log(color);






// 10.   Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var arr = [200, 300,50, 10, 100,500, 450]
// arr.sort()
// console.log(arr);




// 11. Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var cities = ["karachi", "lahore", "inslamabad", "multan", "balochistan"]
// console.log(cities);

// var selectedCities = cities.slice(1, 4)
// console.log(selectedCities);




// 12.  Write a program to create a single string from the below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)


// var arr = ["This", "is", "my", "cat"]; 
// console.log(arr.join(" "));




// 13.  Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var arr = ["keyboard", "mouse", "printer", "moniter"]
// console.log(arr);




// 14.  Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)

// var arr = ["keyboard", "mouse", "printer", "moniter"]
// console.log(arr.reverse());




// 15.  Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:


// var arr = ["Nokia", "iphpne", "Samsung", "Mi"]

// document.write("<button>" + arr[0] + "</button>")
// document.write("<button>" + arr[1] + "</button>")
// document.write("<button>" + arr[2] + "</button>")
// document.write("<button>" + arr[3] + "</button>")