let str = "ketan sawant";

function readString(str) {
  let nosplace = str.replace(/\s/g, "");
  console.log({
    length: nosplace.length,
    sqrt: Math.sqrt(nosplace.length),
    floor: Math.floor(Math.sqrt(nosplace.length)),
    ceil: Math.ceil(Math.sqrt(nosplace.length)),
  });
  let row = Math.floor(Math.sqrt(nosplace.length));
  let cal = Math.ceil(Math.sqrt(nosplace.length));

  if (row * cal < nosplace.length) {
    row++;
  }
  let newStr = "";
  for (let i = 0; i < cal; i++) {
    let jump = 0;
    while (i + jump < nosplace.length) {
      newStr += nosplace[i + nosplace];
      jump = cal;
    }
    newStr += "";
  }
  return newStr;
}

console.log(readString(str));

//Staircase

//======================================
// 01: HackerRank Problem solving in JavaScript (aVeryBigSum)
//======================================
//https://www.hackerrank.com/challenges/a-very-big-sum/problem?isFullScreen=true
//const array = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005]

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

// function aVeryBigSum(ar) {
//     // Write your code here
//     return ar.reduce((acc,cur)=>{return acc+cur},0)
// }

// console.log(aVeryBigSum(array))

//======================================
// 02: HackerRank Problem solving in JavaScript (compareTriplets)
//
//======================================
//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// const a = [5, 6, 7];
// const b = [3, 6, 10];

// function compareTriplets(a, b) {
//   let a_ponint = 0;
//   let b_ponint = 0;

//   // bosth array length is equal than proceed esle return
//   if (a.length !== b.length) return;
//   let arrayLength = a.length;

//   for (var i = 0; i < arrayLength; i++) {
//     if (a[i] > b[i]) {
//       a_ponint++;
//     }
//     if (b[i] > a[i]) {
//       b_ponint++;
//     }
//   }
//   return [a_ponint, b_ponint];
// }
console.log(compareTriplets(a, b));

//======================================
// 03: HackerRank Problem solving in JavaScript (Diagonal Difference !)
// X SUM and diffrence
//======================================
//https://www.hackerrank.com/challenges/diagonal-difference/problem?isFullScreen=true
const array = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDiffrence(arr) {
  let ltrDiagonal = 0;
  let rtrDiagonal = 0;
  for (var i = 0; i < arr.length; i++) {
    ltrDiagonal += arr[i][i];
    rtrDiagonal += arr[i][arr.length - i - 1];
    console.log(ltrDiagonal);
    console.log(rtrDiagonal);
  }
  let diff = Math.abs(ltrDiagonal - rtrDiagonal);
  console.log("diffrence: ", diff);
  return diff;
}
diagonalDiffrence(array);

//======================================================================
// 04: HackerRank Problem solving in JavaScript (Compare the Triplets !)
//======================================================================
//https://www.hackerrank.com/challenges/compare-the-triplets/problem?isFullScreen=true
/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

const array04_a = [11, 5, 4];
const array04_b = [7, 15, 14];

function CompareTheTriplets(a, b) {
  if (a.length !== b.length) {
    console.error("Both Array length should be same");
  }
  let a_comTrip = 0;
  let b_comTrip = 0;
  for (var i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      a_comTrip++;
    }
    if (a[i] < b[i]) {
      b_comTrip++;
    }
  }
  console.log(a_comTrip);
  console.log(b_comTrip);
  return [a_comTrip, b_comTrip];
}

console.log(CompareTheTriplets(array04_a, array04_b));

//============================================================
// 05: HackerRank Problem solving in JavaScript (Plus Minus !)
//============================================================
//https://www.hackerrank.com/challenges/plus-minus/problem?isFullScreen=true
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

const array05 = [-4, 3, -9, 0, 4, 1]; //length:6

function plusMinus(arr) {
  let posCount = 0;
  let negCount = 0;
  let zerCount = 0;
  arr.map((item) => {
    if (item > 0) {
      posCount++;
    } else if (item < 0) {
      negCount++;
    } else {
      zerCount++;
    }
  });

  let pos = (posCount / arr.length).toFixed(6);
  let neg = (negCount / arr.length).toFixed(6);
  let zer = (zerCount / arr.length).toFixed(6);
  console.log(pos + "\n" + neg + "\n" + zer);
}

plusMinus(array05);

//============================================================
// 06: HackerRank Problem solving in JavaScript (staircase)
//============================================================
//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // Write your code here
  for (let i = 0; i < n; i++) {
    let printHas = i + 1;
    // console.log(printHas)
    // console.log(n-printHas)
    // console.log("====")
    let string = " ".repeat(n - printHas) + "#".repeat(printHas);
    console.log(string);
  }
}

staircase(6);
//============================================================
// 06: HackerRank Problem solving in JavaScript (Grading Students !)
//============================================================
//https://www.hackerrank.com/challenges/grading/problem?isFullScreen=true

/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

const array06 = [73, 67, 38, 33]; //length:4

function gradingStudents(grades) {
  let gradResultArr = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] < 38) {
      gradResultArr.push(grades[i]);
    } else {
      if ((grades[i] + 1) % 5 == 0) {
        gradResultArr.push(grades[i] + 1);
      } else if ((grades[i] + 2) % 5 == 0) {
        gradResultArr.push(grades[i] + 2);
      } else {
        gradResultArr.push(grades[i]);
      }
    }
  }
  return gradResultArr;
}

console.log(gradingStudents(array06));

//=======================================================================
// 07: HackerRank Problem solving in JavaScript (Birthday Cake Candles !)
//=======================================================================
//https://www.hackerrank.com/challenges/birthday-cake-candles/problem?isFullScreen=true

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

const array07 = [3, 2, 1, 3]; //length:4

function birthdayCakeCandles(candles) {
  let candlesCount = 0;
  let maxCnt = Math.max(...candles);
  candles.forEach((data) => {
    if (data == maxCnt) candlesCount++;
  });
  return candlesCount; //Max is 3 and count is 2
}

console.log(birthdayCakeCandles(array07));
//=========================================================
//08: HackerRank Problem solving in JavaScript (Mini-Max Sum !)
//=========================================================
//https://www.hackerrank.com/challenges/mini-max-sum/problem?isFullScreen=true
/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
let arr = [1,3,5,7,9]
function miniMaxSum(arr) {
  // Write your code here
  //#1. sort array
  arr.sort((a, b) => a - b);
  let miniSum = [...arr]
    .slice(0, arr.length - 1)
    .reduce((acc, cur) => acc + cur);
  let maxSum = [...arr].slice(1, arr.length).reduce((acc, cur) => acc + cur);
  console.log(miniSum, maxSum);
}
//====================
//======= OR =========
//====================
array = [1, 2, 5, 7, 9];

function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);
  //console.log(arr);
  let miniValue = 0;
  let maxValue = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    miniValue += arr[i];
  }
  for (let j = 1; j < arr.length; j++) {
    maxValue += arr[j];
  }
  console.log(miniValue, maxValue);
}
miniMaxSum(array);

//=========================================================
// 09: HackerRank Problem solving in JavaScript (Staircase)
//=========================================================
//https://www.hackerrank.com/challenges/staircase/problem?isFullScreen=true
/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
  // here we use just one for loop where i tracks the number of rows
  // the number of rows (i) should be less than or equal to n
  for (let i = 1; i <= n; i++) {
    // print out a " " n-i times and append a # i times
    // console log adds a new line by default
    //console.log(n-i)
    console.log(" ".repeat(n - i) + "#".repeat(i));
  }
}

staircase(6);

//===============================================================
// 10: HackerRank Problem solving in JavaScript (Time Conversion)
//===============================================================
//https://www.hackerrank.com/challenges/time-conversion?isFullScreen=true
/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */
let s10 = "07:05:45PM";

function timeConversion(s) {
  // Write your code here
  let timeSection = s.charAt(8); // AM or PM
  let milHour = 0;
  if (timeSection === "A") {
    if (s.substring(0, 2) == "12") {
      milHour = "00";
    } else {
      milHour = s.substring(0, 2);
    }
  } else {
    //P
    if (s.substring(0, 2) == "12") {
      milHour = s.substring(0, 2);
    } else {
      milHour = parseInt(s.substring(0, 2), 10) + 12;
    }
  }
  return milHour + s.substring(2, 8);
}

console.log(timeConversion(s10));
//======================================================================
// 11: HackerRank Problem solving in JavaScript (Divisible Sum Pairs !)
//======================================================================
//https://www.hackerrank.com/challenges/divisible-sum-pairs/problem?isFullScreen=true
/*
 * Complete the 'divisibleSumPairs' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER k
 *  3. INTEGER_ARRAY ar
 */

// const array = [1, 3, 2, 6, 1, 2];
// function divisibleSumpairs(n, k, ar) {
//   const returnArray = [];
//   for (var i = 0; i < n; i++) {
//     for (var j = i + 1; j < n; j++) {
//       //console.log(ar[i]+ar[j])
//       //console.log("=",ar[i]+ar[j] % k)
//       if ((ar[i] + ar[j]) % k === 0) {
//         returnArray.push([ar[i], ar[j]]);
//       }
//     }
//   }
//   return returnArray.length;
// }

// console.log(divisibleSumpairs(6, 3, array));

//======================================================================
// 12: HackerRank Problem solving in JavaScript (Electronics Shop !)
//======================================================================
//https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true

let keyBoards = [3,1], Drives = [5,2,8], b = 10

function getMoneySpent(keyBoards, Drives, b){
    let array = [], flag = false
    for(i=0; i<keyBoards.length; i++){
        for(j=0; j<Drives.length; j++){
            if(keyBoards[i]+Drives[j] <= b){
                array.push(keyBoards[i]+Drives[j]);
                flag = true;
            }
        }
    }
    if(flag === false){
        return -1
    }else{
       console.log("array: ",array)
       //return Math.max.apply(null,array)
       return Math.max(...array)
    }
}

console.log(getMoneySpent(keyBoards, Drives, b)) //9
//======================================================================
// 13: HackerRank Problem solving in JavaScript (Camel Case !)
//======================================================================
//https://www.hackerrank.com/challenges/camelcase/problem?isFullScreen=true
/*
 * Complete the 'camelcase' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

// function camelcase(s){
//     let caps = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
//     let capCount = 1
//     for(let i=0; i<s.length; i++){
//         if(caps.includes(s[i])){
//             capCount++
//         }
//     }
//     return capCount
// }

// console.log(camelcase('oneTwoThreeFour'))

//======================================================================
// 14: HackerRank Problem solving in JavaScript (Forming a Magic Square)
//======================================================================
function formingMagicSquare(s) {
  const possibilities = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ];

  let minCost = Infinity; // Start with a very large number

  // Loop through each magic square possibility
  for (let i = 0; i < possibilities.length; i++) {
    let currentCost = 0;

    // Compare each element in the 3x3 grid
    for (let j = 0; j < 3; j++) {
      for (let k = 0; k < 3; k++) {
        currentCost += Math.abs(s[j][k] - possibilities[i][j][k]);
      }
    }

    // Update the minimum cost
    if (currentCost < minCost) {
      minCost = currentCost;
    }
  }

  return minCost;
}
const s = [
  [4, 8, 2],
  [4, 5, 7],
  [6, 1, 6],
];
const s2 = [
  [4, 9, 2],
  [3, 5, 7],
  [8, 1, 5],
];

console.log(formingMagicSquare(s2)); // Output: 4

//======================================================================
// 15: HackerRank Problem solving in JavaScript (Picking Numbers)
//======================================================================
let array_11 = [4, 6, 5, 3, 3, 1]; //length 6

function pickingNumbers(a) {
  let maxCount = 0;

  // Sort the array to make comparison easier
  a.sort((x, y) => x - y);

  for (let i = 0; i < a.length; i++) {
    let count = 0;

    // For each element, count elements that are either equal or have a difference of 1
    for (let j = 0; j < a.length; j++) {
      if (a[i] === a[j] || a[i] === a[j] + 1) {
        //console.log(`a[i]:${a[i]} === a[j]:${a[j]} `)
        count++;
      }
    }

    // Track the maximum count
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

console.log(pickingNumbers(array_11));

//=========================================================================
// 16: HackerRank Problem solving in JavaScript (Climbing the Leaderboard)
//=========================================================================
function climbingLeaderboard(ranked, player) {
  const result = [];
  let rankedUnique = [...new Set(ranked)]; // Remove duplicates from ranked
  let currentRankedIndex = rankedUnique.length - 1;

  player.forEach((score) => {
    // Find the player's rank based on their score
    while (
      currentRankedIndex >= 0 &&
      score >= rankedUnique[currentRankedIndex]
    ) {
      currentRankedIndex--; // Move up the leaderboard
    }
    result.push(currentRankedIndex + 2); // The rank is one more than the index
  });

  return result;
}
let ranked = [100, 100, 50, 40, 40, 20, 10];
let player = [5, 25, 50, 120];

console.log(climbingLeaderboard(ranked, player));
// Output: [6, 4, 2, 1]

//=============================================================
// 17: HackerRank Problem Solving in JavaScript (Find Digits !)
//=============================================================
//https://www.hackerrank.com/challenges/find-digits/problem?isFullScreen=true
/*
 * Complete the 'findDigits' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
function findDigits(s){
   const numArray = [...s.toString()]
   let divfindCount = 0;
   for(var i=0; i<numArray.length; i++){
       if(s % Number(numArray[i]) === 0){
           divfindCount++
       }
   }
   return divfindCount
}
console.log(findDigits(12)) //2
console.log(findDigits(1012)) //3

//==================================================================
// 18: HackerRank Problem Solving in JavaScript (Mars Exploration !)
//==================================================================
//https://www.hackerrank.com/challenges/mars-exploration/problem?isFullScreen=true
/*
 * Complete the 'marsExploration' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

let string = 'SOSSPSSQSSOR'
function marsExploration(str){
    let count = 0;
    for(let i=0; i<str.length; i+=3){
        // console.log(str[i])
        // console.log(str[i+1])
        // console.log(str[i+2])
        if(str[i] !== "S") count++;
        if(str[i+1] !== "O") count++;
        if(str[i+2] !== "S") count++;
    }
    console.log("count: ",count)
    return count
}

marsExploration(string)

//==================================================================
// 19: HackerRank Problem Solving in JavaScript (Two Strings !)
//==================================================================
//## not Done ##//
//https://www.hackerrank.com/challenges/two-strings/problem?isFullScreen=true
/*
 * Complete the 'twoStrings' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING s1
 *  2. STRING s2
 */

// let s1 = 'hello world'
// let s2 = 'hi world'

// function twoStrings(s1, s2) {
//   // Write your code here
//   let flag = false;
//   for(let i=0; i<s1.length; i++){
//       if(s2.indexOf(s1[i]) > -1){
//           flag = true
//       }
//   }
//   if(flag === true) return 'YES'
//   else return 'NO'
// }

// console.log(twoStrings(s1, s2)) //YES

//====================================================================
// 20: HackerRank Problem Solving in JavaScript (Equalize The Array !)
//====================================================================
//https://www.hackerrank.com/challenges/equality-in-a-array/problem?isFullScreen=true

/*
 * Complete the 'equalizeArray' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

// let array = [3,3,2,1,3]
// function equalizeArray(arr){
//    let count = 1, max = 0;
//    arr.sort((a,b)=>a-b)
//    for(let i=0; i<arr.length; i++){
//        if(arr[i] === arr[i+1]){
//            count++
//        }else{
//            if(count > max){
//                max = count
//            }
//            count = 1
//        }
//    }
//    return arr.length - max
// }
// console.log(equalizeArray(array)) //2

//==================================================================
// 21: HackerRank Problem Solving in JavaScript (Find The Median !)
//==================================================================
//https://www.hackerrank.com/challenges/find-the-median/problem?isFullScreen=true

/*
 * Complete the 'findMedian' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


// let array = [0, 5, 4, 2, 1, 3, 6];

// function findMedian(arr) {
//   arr.sort((a, b) => a - b);
//   let middValueIndiex = Math.floor(arr.length / 2);
//   //console.log(arr, middValueIndiex)
//   return arr[middValueIndiex];
// }
// console.log(findMedian(array)) //3
//========================================================================
// 22: HackerRank Problem Solving in JavaScript (Circular Array Rotation!)
//========================================================================
//https://www.hackerrank.com/challenges/circular-array-rotation/problem?isFullScreen=true
/*
 * Complete the 'circularArrayRotation' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER k
 *  3. INTEGER_ARRAY queries
 */

// let array = [1,2,3]
// let k = 2
// let query = [0,1,2]

// function circularArrayRotation(a, k, queries){
//     //console.log(a)
//     let tampArray = []
//     for(let i=0; i<k; i++){
//         a.unshift(a.pop())
//         //console.log(a)
//     }
//     for(let j=0; j < queries.length; j++){
//         tampArray.push(a[queries[j]])
//     }
//    return  tampArray
// }
// console.log(circularArrayRotation(array, k, query)) //[ 2, 3, 1 ]

//========================================================================
// 23: HackerRank Problem Solving in JavaScript (hurdleRace)
//https://www.hackerrank.com/challenges/the-hurdle-race/problem?isFullScreen=true&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================

/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */
//let k = 4 
let height = [ 1, 6, 3, 5, 2 ]

function hurdleRace(k, height) {
    // Write your code here
    let maxHeight = 0
    for(var i=0; i<height.length; i++){
        let item = height[i]
        if(item > k){
            let diffBtw = item - k;
            maxHeight = Math.max(maxHeight, diffBtw)
        }   
    }
  return maxHeight;
}

console.log(hurdleRace(k, height))

//========================================================================
// 23: HackerRank Problem Solving in JavaScript (hurdleRace)
//https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
/*
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */
// let h = [
//   1, 3, 1, 3, 1, 4, 1, 3,
//   2, 5, 5, 5, 5, 5, 5, 5,
//   5, 5, 5, 5, 5, 5, 5, 5,
//   5, 5
// ] 
// let word = "abc"

let h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7]
let word = "zaba"

function designerPdfViewer(h, word) {
    // Write your code here
    let maxHeight = 0
    for(let i=0;i<word.length; i++){
        let charIndex = word[i].charCodeAt()-97
        if(h[charIndex] > maxHeight){maxHeight = h[charIndex]}
    }
   return word.length * maxHeight
}
console.log(designerPdfViewer(h, word))

//========================================================================
// 24: HackerRank Problem Solving in JavaScript (Utopian Tree)
//https://www.hackerrank.com/challenges/utopian-tree/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
/*
 * Complete the 'utopianTree' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER n as parameter.
 */
// 1) 0:: 1
// 2) 1:: 1*2 = 2
// 3) 2:: 2+1 = 3
// 4) 3:: 3*2 = 6
// 5) 4:: 6+1 = 7
// 6) 5:: 7*2 = 14

function utopianTree(n) {
  // Write your code here
 let h = 1;
 for(let i=1; i<=n; i++){
    if(i%2 !== 0){
        h = h * 2
    }else{
        h++
    }
 }
 console.log(h)
 return h
}
let n = [0,1,2,3,4,5]
for(let i=0 ; i<n.length; i++){
   utopianTree(i)
}
//========================================================================
// 25: HackerRank Problem Solving in JavaScript (Angry Professor)
//https://www.hackerrank.com/challenges/angry-professor/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */
function angryProfessor(k, a) {
  // Write your code here
  let count = 0
  for(let item of a){
      if(item <= 0){
          count ++
      }
  }
  //console.log(count, k)
  return count >= k? "NO" : "YES";
}
//let k = 3, a=[ -1, -3, 4, 2 ]
//let k = 2, a= [ 0, -1, 2, 1 ]

console.log(angryProfessor(k, a))
//========================================================================
// 26: HackerRank Problem Solving in JavaScript (Beautiful Days at the Movies)
// https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
/*
 * Complete the 'beautifulDays' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER i
 *  2. INTEGER j
 *  3. INTEGER k
 */

let i=20, j=23, k=6
function beautifulDays(i, j, k) {
  // Write your code here
  let count = 0;
  for(let a=i; a<=j; a++){
      let b = a.toString().split('') .reverse().join('');
      let cal = Math.abs((a-b)/k)
      if(Number.isInteger(cal))count++
  }
  //console.log(count)
  return count
}

beautifulDays(i, j, k)
//========================================================================
// 26: HackerRank Problem Solving in JavaScript (Viral Advertising)
//https://www.hackerrank.com/challenges/strange-advertising/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
//let n=3
function viralAdvertising(n) {
    // Write your code here
    let shared = 5, like = 0, totalLikes = 0;
    for (let i = 1; i <= n; i++) {
        like = Math.floor(shared / 2);
        console.log("like:", like)
        shared = like * 3;
        console.log("shared:", shared)
        totalLikes += like;
        console.log("totalLikes:", totalLikes)
    }
    console.log(totalLikes)
    return totalLikes;
}
viralAdvertising(n)
//========================================================================
// 26: HackerRank Problem Solving in JavaScript (Save the Prisoner!)
// https://www.hackerrank.com/challenges/save-the-prisoner/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
/*
 * Complete the 'saveThePrisoner' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  3. INTEGER s
 */

//let n = 5, m = 2, s = 1 //2
//let n = 5, m = 2, s = 2 //3
//let n =7, m = 19, s = 2 //6
//let n =3, m = 7, s =  3 //3

function saveThePrisoner(n, m, s) {
  // Write your code here
    let value = s + m - 1;
    return (value > n)
        ? (!(value % n) ? n : value % n)
        : value;
}

console.log(saveThePrisoner(n, m, s))

//========================================================================
// 27: HackerRank Problem Solving in JavaScript (Sequence Equation)
// https://www.hackerrank.com/challenges/permutation-equation/problem?isFullScreen=false&utm_campaign=challenge-recommendation&utm_medium=email&utm_source=24-hour-campaign
//========================================================================
//