// Arrays


// Question: For a given array with marks of students => [85, 97, 37, 76, 60]
// Find the avergae marks of entire class

let marks = [85, 97, 37, 76, 60];
let totalMarks = 0;

for(let val of marks){
          totalMarks += val;
}
console.log("Average marks is: ", totalMarks/marks.length);

// Question: For a given array with price of 5 items => [250, 645, 300, 900, 50]
// All items have an offer of 10% OFF on them. Change the array to store final price after applying offer

let prices = [250, 645, 300, 900, 50];

for(let index = 0; index < prices.length; index++){
          prices[index] = (prices[index] - (prices[index]/10));
}
console.log(prices);


/*
pop() => rmeove from end
shift() => remove from start
slice(startIdx, endIdx) => return the piece of the array
splice(index, deleteCount, addEle1, addEle2,..) => remove the 'deleteCount' from the 'index' and add new elements at that index
push() => add element to the end
unshift() => add element to the start
toString() => Convert array to String
*/


let nums = [1, 2, 3, 4, 5, 6, 7]

// Add Element at index 2
nums.splice(2, 0, 101);
console.log(nums)

// Delete two Element from index 4
nums.splice(4, 2);
console.log(nums)

// Replace Element at index 1
nums.splice(1, 1, 111);
console.log(nums)

// Question: create an array to store companies => "Bloomberg", "Microsoft", "Ola", "Google", "IBM", "Netflix"

let company = ["Bloomberg", "Microsoft", "Ola", "Google", "IBM", "Netflix"];

// Remove the first company from the array
let removedCompany = company.shift();
console.log(company);
console.log("Removed company is: ", removedCompany);

// Remove Ola and Add Uber in its place
company.splice(1, 1, "Uber");
console.log(company);

// Add Amazon at the end
company.push("Amazon");
console.log(company)

// Add Intel to the start
company.unshift("Intel");
console.log(company);
