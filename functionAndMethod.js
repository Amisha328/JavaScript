// Functions and Methods

// Arraw Functions:

let multiVal = (a, b) => {
          return a*b;
} 

console.log(multiVal(2, 3));

// Question: Create a function using "function" keyword that takes a String as an argument and return the number of vowels in the string

function findVowel(str){
          let newStr = str.toLowerCase();
          let count = 0;
          for(let ch of newStr){
                    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') count++;
          }
          return count;
}

console.log("Number of Vowels is ",findVowel("Amisha Sahu"));

// Question: Perform the same task using arrow function

let counVowel = (str) => {
          let newStr = str.toLowerCase();
          let count = 0;
          for(let ch of newStr){
                    if(ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') count++;
          }
          return count;  
}

let str = "JavaScript Tutorial"
console.log(`Vowels in string ${str} is: ${counVowel(str)}`);


// forEach loop in Array => Higher Order Function

/*
Array.forEach(caalBackFunction); 
CallbackFunction: is a function to execute for each element in the array
A callback function is a function passed as an argument to another function
*/

let nums = [1, 2, 3, 4, 5]

// using function
nums.forEach(function printVal(val){
          console.log(val);
})


let cities = ["pune", "delhi", "banglore", "mumbai"]
// using arrow function
// callback function can takes 3 arguments => (value, index, arr)
// val => value at each index
// idx => index of each element (optional)
// arr => the whole array (optional)
cities.forEach((val, idx, arr) => {
          console.log(val.toUpperCase(), idx, arr);
})


// Given array of numbers, print the square of each value using the forEach loop.

let arr = [100, 12, 51, 64]

// Method 1:
arr.forEach((val) => {
          console.log(val*val);
})

// Method 2:

let calSquare = (num) => {
          console.log(num * num);
}

arr.forEach(calSquare);



// map => create a new array with the result of some operation. the vaue its callback returns are used to form new array.
// arr.map(callbackFunction(value, index, array))

arr.map((val) => {
          console.log(val);
})

let newArr = arr.map((val) =>{
          return val*val;
})

console.log(newArr);

// Filter => create a new array of elements that give true for a condition

let evenArray = arr.filter((val) => {
          return val%2 == 0;
})

console.log(evenArray);


// reduce => perform some operations & reduce the array to asingle value. It retusn that single value.

const initialVal = 0;
const sum = arr.reduce((prev, curr) => {
          prev = prev + curr;
          return prev;
})

// Question: Find the largest element of entire array using reducer

const maxVal = arr.reduce((prev, curr) => {
          return prev > curr ? prev :curr;
})

console.log("Largest value in arra is: ", maxVal);


// Question: We are given an array of marks of students. Filter out the marks of students that scored 90+

let marks = [87, 93, 64, 99, 86];

let topper = marks.filter((val) =>{
          return val> 90;
})

console.log("90+ marks: ", topper);


// taking input in array:

/*
let size = prompt("Enter size of array");
var inputArr = [];
for(let idx = 0; idx < size; idx++){
    inputArr[idx] = prompt("Enter element of array:",idx);
}

console.log("Input array by user is: ")
console.log(inputArr);
*/

// Question: Given a number n as input from user. create an array of elements from 1 to n.

let n = prompt("Enter a number:")
let userArray = [];

for(let i = 0; i < n; i++){
    userArray[i] = i+1;
}
// Use reduce method to calculate sum of all the numbers in the array.
// Method 1;
// if we do n+1 it will conver it into string like : if n = 5 and we do n+1 it will become 51
console.log(`Sum of all the numbers is array: ${n * (++n)/2}`);

// Method 2:
let totalSum = userArray.reduce((sum, curr) =>{
    return sum + curr;
})

console.log("Sum of all elements in array using reduce() is: ", totalSum);

// Use reduce method to calculate product of all the numbers in the array.

let totalProd = userArray.reduce((prod, curr) =>{
    return prod * curr;
})

console.log("Product of all elements in array using reduce() is: ", totalProd);
