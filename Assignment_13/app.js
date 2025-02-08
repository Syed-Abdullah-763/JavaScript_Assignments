// console.log("Hello assignment 13");





// 1. Write a program that displays current date and time in your browser.

// var date = new Date()

// console.log(date);





// 2. Write a program that alerts the current month in words. For example December.

// var date = new Date ();

// var months = [
//     "January", "February", "March", "April", "May", "June", 
//   "July", "August", "September", "October", "November", "December"
// ]

// var currentMonth = date.getMonth();
// console.log(months[currentMonth]);




// 3. Write a program that alerts the first 3 letters of the current day, for example if today is Sunday then alert will show Sun.

// var now = new Date ().getDay();
// var days = [
//     "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
// ]
// console.log(days[now]);






// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.

// var day = new Date ().getDay();

// if (day === 0 || day === 6) {
//     console.log("It's fun day");
    
// }






// 5. Write a program that shows the message “First fifteen days of the month” if the date is less than 16th of the month else shows “Last days of the month”.


// var now = new Date().getDate();

// if (now <= 15) {
//     console.log("First fifteen days of the month");
    
// }else {
//     console.log("Last days of the month");
    
// }







// 6. Write a program that determines the minutes since midnight, Jan. 1, 1970 and assigns it to a variable that hasn't been declared beforehand. Use any variable you like to represent the Date object.


// var now = new Date ();

// var milliSeconds = now.getTime();
// var minutes = Math.floor(milliSeconds / (1000  * 60))

// console.log("Todays date",now);
// console.log("minutes",minutes);
// console.log("milliSeconds",milliSeconds);








// 7. Write a program that tests whether it's before noon and alert “Its AM” else “its PM”.


// var now = new Date ();

// var hours = now.getHours();
// console.log(time);


// if (hours < 12) {
//     console.log("Its AM");
// }else if (hours >= 12) {
//     console.log("It's PM");
// }else {
//     console.log("Server not responding");
// }








// 8. Write a program that creates a Date object for the last day of the last month of 2020 and assigns it to variable named laterDate.


// var date = new Date ("31 dec 2020")

// console.log(date);









// 9. Create a date object of the starting date of this Ramadan and alert the number of days past since 1st Ramadan? Note: 1st Ramadan was on June 18, 2015

// var firstDayOfRamazan = new Date("18 jun 2015").getTime();

// var remainTime = new Date().getTime() - firstDayOfRamazan;

// var days = Math.ceil(remainTime / (1000 * 60 * 60 *24))

// console.log(days);








// 10.   Write a program that displays in your browser the seconds that elapsed between the reference date and the beginning of 2015.

// var refDate = new Date ("2 jan 2015").getTime();
// var startDate = new Date ("1 jan 2015").getTime()

// var diff = refDate - startDate

// var seconds = diff / 1000

// console.log(seconds);








// 11.    Create a Date object for the current date and time. Extract the hours, reset the date object an hour ahead and finally display the date object in your browser.


// var now = new Date ();
// console.log(now);

// var currentHour = now.getHours();

// now.setHours(currentHour + 1)

// console.log(now);









// 12.    Write a program that creates a date object and show the date in an alert box that is reset to 100 years back?

// var now = new Date ();

// console.log(now);

// var currentYear = now.getFullYear();

// now.setFullYear(currentYear - 100)

// console.log("100 years back it was =>",now);









// 13.    Write a program to ask the user about his age. Calculate and show his birth year in your browser

// var userDOB = prompt("Enter your DOB", "18 feb 2007");

// var birthDate = new Date (userDOB);
// console.log("Your date of birth is " + birthDate);

// var birthTime = birthDate.getTime();
// var now = new Date ().getTime() - birthTime;

// var age = Math.floor(now / (1000 * 60 * 60 * 24 * 365))

// console.log("Your age is " + age);









// 14.    Write a program to generate your K-Electric bill in your browser. All the amounts should be rounded off to 2 decimal places. Display the following fields:

// a. Customer Name 
// b. Current Month
// c. Number of units
// d. Charges per unit
// e. Net Amount Payable (within Due Date)
// f. Late Payment Surcharge
// g. Gross Amount Payable (after Due Date) Where,






// var customerName = "Syed Abdullah"
// console.log("customerName:", customerName);

// var month = new Date().toLocaleString('default', {
//     month: 'long'
// })
// console.log("month:", month);


// var totalUnits = 461;
// console.log("Number of units:", totalUnits);

// var oneUnit = 16;
// console.log("Charges per unit:", oneUnit);


// var amount1 = totalUnits * oneUnit;
// console.log("Net Amount Payable (within Due Date):", amount1);

// var latePayment = 350;
// console.log("Late Payment Surcharge:", latePayment);

// var amount2 = amount1 + latePayment;
// console.log("Gross Amount Payable (after Due Date):", amount2);
