// Question - 1: get user to input a number using promt and check if the number is a multiple of 5 or not.

/*
let num = prompt("enter a number");
if(num % 5 == 0) console.log("YES");
else console.log("NO");
*/


// Question 2: Write a code which can give grades to students according to their score.

/*
let marks = prompt("Enter your marks");
if(marks >= 80 && marks <= 100) console.log("Grade A");
else if(marks >= 70 && marks <= 79) console.log("Grade B");
else if(marks >= 60 && marks <= 69) console.log("Grade C");
else if(marks >= 50 && marks <= 59) console.log("Grade D");
else if(marks >= 0 && marks <= 49) console.log("Grade F");
*/

// for-of loop - used for array and strings
/*
let str = "JavaScript"
for(let s of str) console.log(s);
*/

// for-in loop - used with objects

/*
let student = {
          name: "Amisha Sahu",
          age: 23,
          cgpa: 9.0,
          isPass: true
};

for(let key in student){
          console.log(key, " => ", student[key]);
}
*/

// Question 3: Print all the even numbers from 0 to 100.

/*
console.log("Print all the even numbers from 0 to 100");

for(let i = 0; i <= 100; i++){
          if(i % 2 == 0) console.log(i);
}
*/


// Question 2: Create a game where you start with any random game number. Ask the user to 
// keep guessing the number until the user enters correct value.

/*
let gameNumber = 9;

let userInput = prompt("Guess the game number:");

while(gameNumber !== userInput){
          console.log("Incorrect guess");
          userInput = prompt("Guess the game number:");
}

console.log("Congratulations!! you guessed it right, the number is: ", gameNumber);
*/

// String in javascript

/*
let str = "Amisha\nSahu"; // Here length should be 12
console.log(str.length); // but we get 11 as "\n" is considered as a single unit

// Strings are immutable in javascript
// toUpperCase(), toLowerCase() => does not change the original string, instead creates a new string
let newStr = str.toUpperCase();
console.log(newStr);

let s = "01234567";
console.log(s.slice(1,6));

let str1 = "Hello"
let str2 = "World";

console.log(str1.concat(str2));
console.log(str1 + " " + str2);
console.log(str1.replace("lo", "p"));
console.log(str1.replace("l", "p"));
console.log(str1.replaceAll("l", "p"));
console.log(str1.charAt(1));
*/

// Question 3: Promt user to enter their full name. Generate a username for them based on the input. Start username with @, followerd by their full name and ending with the fullname length

/*
let fullName = prompt("Enter your Full Name without space:");

let username = `@${fullName}${fullName.length}`;

console.log("Username is: ", username);
*/





