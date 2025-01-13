// in array its not mandatory to store same type of data
// you can store diffrent type of data
// Also javascript array resizeable there are not fixed size
// its follow 0-base indexing

const arr1 = [1, 3, 4, 5, 6, "JavaScript", {name: "deepak"}, 3.4, true];

const heros = ["IronMan", "Batman", "SuperMan"];

const newArr = new Array(3, 4, 5, 6, 7 );

console.log(arr1[5]); // 0-based indexing

// Array Methods

arr1.push("Raghav");
arr1.push(900)

console.log(arr1)

arr1.pop()

console.log(arr1)

newArr.unshift(4);
newArr.shift()

console.log(newArr.includes(9));
console.log(newArr.indexOf(3));

const nums = [2,3,4,5,6];
const arrow = [3, 4, 5, 6, 7,];

const arr = [...nums, ...arrow];

console.log(arr)

const logo = [4,5,3,2];
const cpp = logo.join()

console.log(cpp)
console.log(logo)
//++++++++++++++++++++++++++++++++++ (slice, splice) +++++++++++++++++++++

const marvel = [7, 6, 4, 2, 8]

console.log(" A ", marvel)
const dc = marvel.slice(1,3)

console.log(dc)
console.log(" B ", marvel)

const Batman = marvel.splice(1,3) // its manuplate orignal array

console.log(" C ", marvel)
console.log(Batman)

