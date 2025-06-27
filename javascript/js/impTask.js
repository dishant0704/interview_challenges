//======================================
//The gate Way corp
//Wednesday, August 28⋅16:00 – 17:00
//hr@thegatewaycorp.com
//dimple.tiwari@thegatewaycorp.com or call me on +916359884716.
//========================================
//======================================
//6. Write a piece of code for the following problem and analyze its complexity:
//Given an array of distinct integers and a target sum, find two numbers in the array that add up to the target sum.
function findTwoSum(nums, target) {
  let retuenArray = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i + " : " + j);
      if (nums[i] + nums[j] == target) {
        retuenArray.push([nums[i], nums[j]]);
      }
    }
  }
  return retuenArray;
}

console.log(findTwoSum([7, 11, 15, 2], 26));
console.log(findTwoSum([5, 3, 5, 7], 10));

//======================================
// Tech discussion_Lead React developer_KETAN SAWANT
// Company : Moolya.com
// HR: ranjitha.c@moolya.com
// sudhir.reddy@moolya.com
// Thursday, 29 August⋅16:00 – 16:45
//========================================
//======================================

srt = "03Ju23st 15te5ll10 12me6 3the ti45me 09f567or 06bu7s";
//The parseFloat() method parses a value as a string and returns the first number.
function isNumeric(str) {
  if (typeof str != "string") return false; // we only process strings!
  return (
    !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
    //The parseFloat() method parses a value as a string and returns the first number.
    !isNaN(parseFloat(str))
  ); // ...and ensure strings of whitespace fail
}

//console.log(isNumeric("k"))
function sumOfString(srt) {
  const stringArray = [...srt];
  const numberArraay = stringArray.filter((item) => isNumeric(item));
  const sum = numberArraay.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0);
  console.log(sum);
}
// sumOfString(srt)

// OR

// let srt = '03Ju23st 15te5ll10 12me6 3the ti45me 09f567or 06bu7s'
// srt.replace(/\D/g,"")
// function sumOfString2(srt) {
//   const numberArraay = [...srt.replace(/\D/g,"")]
//   const sum = numberArraay.reduce((acc, cur) => {
//     acc += Number(cur);
//     return acc;
//   }, 0);
//   console.log(sum);
// }

// sumOfString2(srt)

//======================================
//L1 Interview with GS Lab | GAVS!
//Wednesday, September 25 17:00 – 18:00
// HR isha.limaye@gslab.com
//======================================
//======================================
// Sagir S Shaikh
// 17:21
// str=’welcome to javascript !!’
// o/p= “welcome_to_javascript_!!”

let str = "welcome to javascript !!";
String.prototype.myRePlace = function (find, replace) {
  let strArray = this.split(find);
  return strArray.join(replace);
};
console.log(str.myRePlace(" ", "_"));

//======================================
// Sagir S Shaikh
// 17:27
// Given a binary array, find the maximum number of consecutive 1s in this array.
// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// JavaScript program to count maximum
// consecutive 1's in a binary array.
// Returns count of maximum
// consecutive 1's in binary
// array arr[0..n-1]
//======================================

function getMaxLength(arr, n) {
  // initialize count
  let count = 0;

  // initialize max
  let result = 0;

  for (let i = 0; i < n; i++) {
    // Reset count when 0 is found
    if (arr[i] == 0) count = 0;
    // If 1 is found, increment
    // count and update result
    // if count becomes more.
    else {
      // increase count
      count++;
      result = Math.max(result, count);
    }
  }

  return result;
}

// Driver code
let arr = new Array(1, 1, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1);
let n = arr.length;
document.write(getMaxLength(arr, n));

//======================================
//Ketan Daddatraya Sawant - React + Typescript - Discussion
//Thursday, 17 October⋅15:15 – 16:15
//prabhu.ayyamperumal@wipro.com
// HR Deepak : 9844995479
//======================================
//#1 create promise and print console like as below
//1
//22
//333
console.log("1")
const promise = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('done')
        console.log("22")
    },200)
})
promise.then(()=> console.log("333"))

//======================================
//IBM: Which charator repited mostly in sstring
//======================================
// let str = 'hello world';

// function findMostRepitedChar(string){
//   const charCount = [...string].reduce((acc, cur)=>{
//       if(!acc[cur]) acc[cur] = 0
//       acc[cur]++
//       return acc
//   },{})
//   const valueArray = Object.values(charCount)
//   const highCount = Math.max.apply(null, valueArray)
//   const findCharIndx = valueArray.indexOf(highCount) 
//   const hirCharCount = Object.keys(charCount).filter((item, i)=> i === findCharIndx)
//   return hirCharCount.join()
// }

console.log(findMostRepitedChar(str))

//======================================
//Remove duplicate from object and sort it
//======================================
const books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

function printText(array){
 const titleArray = array.map(({ title }) => title);
  const filtered = array.filter(({ title }, index) =>
  !titleArray.includes(title, index + 1));
  // sort title
  filtered.sort((a, b)=>a.title - b.title)
  return filtered
}

console.log(printText(books, 'title'));

//======================================
//micro1 interview invite 20/11/2024
//======================================

let S = 'Heloo World'
let N = 4;
let K = 2

function stringTask(str, number, key){
    let strArray = [...str]
    let tempArray = []
    let count = 0;
    for(let i = 0; i<strArray.length; i+=number){
        const sliceString = strArray.slice(i, i+number)
        if(count < key){
            sliceString.reverse();
            count++
        }
       tempArray.push(sliceString.join(""))
    }
  return tempArray
    
}

console.log(stringTask(S, N, K)) //[ 'oleH', 'oW o', 'rld' ]

//======================================
//micro1 interview invite 20/11/2024
//======================================
let arrayA = [{seq:1, text: "hi"},{seq:4, text: "World"},{seq:6, text: "Hello"}]
function sequence(array){
    let reArangeArr = array.sort((a,b)=>a.seq-b.seq);
    
    let seqLength = 0
    let tempArray = []
    
    // get length of data
    for(let i=0; i<reArangeArr.length; i++){
       if(reArangeArr[i].seq > seqLength) seqLength = reArangeArr[i].seq;
    }
    
    for(let j=0; j<seqLength; j++){
        //get Data from array
        let seq = reArangeArr.filter((item, i)=> item.seq === j+1)
        if(seq.length > 0){
            tempArray.push(seq[0].text)
        }else{
            tempArray.push('[MISSING]')
        }
    }
    return tempArray
}
console.log(sequence(arrayA)) // [ 'hi', '[MISSING]', '[MISSING]', 'Hello', '[MISSING]', 'World' ]
//======================================
//micro1 interview invite 20/11/2024
//======================================
// let arrayB = [
//   {type:"Inset", text: "hello", index:2},
//   {type:"Inset", text: "world", index:3},
//   {type:"Delete", count: 3, index:1},
//   {type:"Inset", text: "!", index:4}
// ]

// function joinString(array){
//    let string = ""
//    array.map((item, inx)=>{
//      const{type, text} = item;
//      if(type === "Inset"){
//          string = string+text
//      }
//      if(type === "Delete"){
//          string = string.substring(0,string.length - item.count )
//      }
//    })
//    return string
// }
// console.log(joinString(arrayB)) //hellowo!
//======================================
// Remove Empty Elements from an Array in JavaScript
// https://www.geeksforgeeks.org/remove-empty-elements-from-an-array-in-javascript/?ref=lbp
//======================================
// let a = [10, , null, 20, undefined, "", 30, 40, 50];
// let newArray = a.filter((e)=> e)
// console.log(newArray)

//=============================================
// How to Remove Duplicates from an Array of Objects in JavaScript?
// https://www.geeksforgeeks.org/how-to-remove-duplicates-from-an-array-of-objects-using-javascript/
//=============================================
// const a = [
//   { a: '1', b: '2' },
//   { c: '2', d: '4' },
//   { c: '2', d: '4' },
//   { a: '1', b: '2' }
// ];

// const uniqueArray = a.filter((o, index, arr) =>
//   arr.findIndex(item => JSON.stringify(item) === JSON.stringify(o)) === index
// );

// console.log(uniqueArray);
//=============================================
// How to find longest substring in javascript
//Length of the longest substring with consecutive characters
//https://www.geeksforgeeks.org/length-of-the-longest-substring-with-consecutive-characters/?ref=ml_lbp
//=============================================

// Javascript implementation of the approach

// Function to return the ending index for the
// largest valid sub-string starting from index i
// function getEndingIndex(str,n,i)
// {
// 		i++;
// 		while (i < n) {
// 			let curr = str[i];
// 			let prev = str[i - 1];

// 			// If the current character appears after
// 			// the previous character according to 
// 			// the given circular alphabetical order
// 			if ((curr == 'a' && prev == 'z') ||
// 				(curr.charCodeAt(0) - prev.charCodeAt(0) == 1))
// 				i++;
// 			else
// 				break;
// 		}

// 		return i - 1;
// }

// // Function to return the length of the longest
// // sub-string of consecutive characters from str
// function largestSubStr(str,n)
// {
// 		let len = 0;

// 		let i = 0;
// 		while (i < n) {

// 			// Valid sub-string exists from index
// 			// i to end
// 			let end = getEndingIndex(str, n, i);

// 			// Update the length
// 			len = Math.max(end - i + 1, len);
// 			i = end + 1;
// 		}

// 		return len;
// }

// // Driver code
// let str = "abcabcdefabc";
// let n = str.length;

// document.write(largestSubStr(str, n));
// This code is contributed by patel2127

//==============================================
// Length of the longest substring with no consecutive same letters
// https://www.geeksforgeeks.org/length-of-the-longest-substring-with-no-consecutive-same-letters/?ref=ml_lbp
// Input: str = “abcdde” 
// Output: 4 
// “abcd” is the longest
// Input: str = “ccccdeededff” 
// Output: 5 
// “ededf” is the longest 
//==============================================

// javascript implementation of the approach class GfG

// Function to return the length 
// of the required sub-string 
function longestSubstring(s) 
{ 
	var cnt = 1, maxi = 1; 

	// Get the length of the string 
	var n = s.length; 

	// Iterate in the string 
	for (i = 1; i < n; i++) 
	{ 

		// Check for not consecutive 
		if (s.charAt(i) != s.charAt(i-1)) 
			cnt++; 
		else
		{ 

			// If cnt greater than maxi 
			maxi = Math.max(cnt, maxi); 

			// Re-initialize 
			cnt = 1; 
		} 
	} 

	// Check after iteration is complete 
	maxi = Math.max(cnt, maxi); 

	return maxi; 
} 

// Driver code
var s = "abcdde";
document.write(longestSubstring(s));


// This code contributed by shikhasingrajput 

