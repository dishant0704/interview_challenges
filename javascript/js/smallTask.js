const themes = [
    { id: 1, value: "k-2" },
    { id: 2, value: "3-5" },
    { id: 3, value: "6-8" },
    { id: 4, value: "9-12" }
];

//Q1: I want to get index of element whose value is equal to "6-8".
for (var i = 1; i < themes.length; i++) {
    if (themes[i].value == "6-8") {
        //console.log(i) // 2
    }
}

//Or

// function findIndex(value, arr){
//     const result = arr.map((item)=> item.value)
//     return "index: "+result.indexOf(value)
//  }
 
//  console.log(findIndex("9-12",themes))

//Q2: Destructur above array
const [a, b, c, d] = themes
//console.log(b) // { id: 2, value: "3-5" }

//Q3: Merge one array to another javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

arr1.push.apply(arr1, arr2);
//console.log("===|| two ||===")
//console.log(arr1);

//Q3B. merge two arrays javascript without concat
//How to merge two arrays and remove duplicate items in JavaScript ?
// let arr1 = [1, 2, 3, 4, 5, 6]; 
// let arr2 = [3, 4, 5, 7];
// let arr = [...arr1, ...arr2];
// let mergedArr = [...new Set(arr)]
// console.log(mergedArr);

//Q4: Merge array create new array
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin"];
const children = arr3.concat(arr4, arr5);
//console.log("===|| three ||===")
//console.log(children)

const finalArray = arr3.concat(arr4,arr5)
const sortArray = finalArray.sort()
console.log(sortArray)

//Q5: Merge two array find max number
const num01 = [2, 8, 7, 9, 45, 92, 20]
const num02 = [21, 18, 67, 19, 40, 100, 120]

const newNumArray = num01.concat(num02);
//console.log(newNumArray);
const max = Math.max.apply(null, newNumArray)
//console.log(max);
const min = Math.min.apply(null, newNumArray)
//console.log(min);
const maxNumber = Math.min.apply(null, num01.concat(num02))
//console.log(maxNumber);
//OR
//const maxNumber = Math.min.apply(null,[...num01, ...num02])
//console.log(maxNumber);

// const num01 = [2, 8, 7, 9, 45, 92, 20]
// const num02 = [21, 18, 67, 19, 40, 100, 120]
// num01.push.apply(num01, num02)
// const maxNumber = Math.max.apply(null, num01)
// console.log(maxNumber)
// const minNumber = Math.min.apply(null, num01)
// console.log(minNumber)

function maxNum(arr){
    let maxNum=0;
       for(i in num01){
           let item = num01[i]
          if(item > maxNum){maxNum = item}
       }
   return maxNum
   }
//console.log(maxNum(num01));

//Q6: infinite currying
function mul(a) {
    return function (b) {
        if (b) return mul(a * b)
        return a
    }
}

//console.log(mul(5)(2)(5)(2)())
//Q7: print name
const obj_Q = {
    name: 'John',
    getmyName: function () {
        function printName() {
            return `Hi ${this.name}`;
        }
        return printName;
    }
}

//Ans:

// const name = obj_Q.getmyName()
// console.log(name.call(obj_Q))

//Q8: remove duplicate entry or data from JavaScript Array [3i Infotech]

var arr = ["apple", "mango", "apple", "orange", "mango", "mango"];

//Filter
function removeDuplicates(arr) {
    return arr.filter((item,
        index) => arr.indexOf(item) === index);
}
//console.log("filter() method"+removeDuplicates(arr));

//set() method
const numArr = [1, 2, 3, 1, 5, 10, 25, 10, 20, 50, 40, 50]
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

//console.log("set() Method "+removeDuplicates(numArr));

//forEach() method
var arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    var unique = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
//console.log("forEach() Method "+removeDuplicates(arr));

//reduce() method

var arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    var unique = arr.reduce(function (acc, curr) {
        if (!acc.includes(curr))
            acc.push(curr);
        return acc;
    }, []);
    return unique;
}
//console.log("reduce() Method: "+removeDuplicates(arr));

//indexOf()
var arr = ["apple", "mango",
    "apple", "orange", "mango", "mango"];

function removeDuplicates(arr) {
    var unique = [];
    for (i = 0; i < arr.length; i++) {
        if (unique.indexOf(arr[i]) === -1) {
            unique.push(arr[i]);
        }
    }
    return unique;
}
//console.log("indexOf() Method"+removeDuplicates(arr));

//Q9: what is output of below code
// Interview - Ketan - L1 UI Reactjs - Hexaware Technologies
var array = [1, 2, 3, 4,]
array.length = 0 // try this array.length = 3
//console.log(array) //[]
//console.log(array[0]) //undefined

//### || JavaScript Array Methods || ###
//https://www.w3schools.com/js/js_array_methods.asp

var array = ["Banana", "Orange", "Apple", "Mango"];

//10: Delete last Array Item
//console.log(array);
//array.pop()
//console.log(array);

//11: Removes the first array element and "shifts" all other elements to a lower index.
//Ans: The shift() method returns the value that was "shifted out":
// array.shift();
// console.log(array);

//12: The splice() methods can be used to remove array elements:
// array.splice(0, 1);
// console.log(array);

//13: Adds a new element to an array (at the beginning).
//Ans: The unshift() method returns the new array length:
// array.unshift("Ketan");
// console.log(array);

//14: Delete Array item.
// Note: Using delete leaves undefined holes in the array. Use pop() or shift() instead of delete.
// console.log(array);
// delete array[1]
// now index 1 is empty
// console.log(array);

//12: Adds new two elements at index 2 to an array
//Ans:The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:
// array.splice(2, 0, "Lemon", "Kiwi");
// console.log(array);

//13: display only Orange and Apple
// Ans: return new array;
// console.log(array.slice(1, 3));

//14: Natty Hatty | React JS Developer | Preliminary Interview
//Friday, 24 February⋅16:00 – 17:00

//15: Task A: create an array and add name like this ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"]
const hello = [
    {
        name: 'Menu 1',
        link: 'http://google.com',
        subitems: [
            {
                name: 'Menu 2',
                link: 'http://google.com',
            },
        ],
    },
    {
        name: 'Menu 3',
        link: 'http://google.com',
        subitems: [
            {
                name: 'Menu 4',
                link: 'http://google.com',
                subitems: [
                    {
                        name: 'Menu 5',
                        link: 'http://google.com',
                    },
                    {
                        name: 'Menu 6',
                        link: 'http://google.com',
                    }
                ],
            },
        ],
    },
];

// function flattenObj(mainObj){
//     let temArray = []
//     function flattenFn(obj){
//         obj.map((item)=>{
//             if(item.subitems)flattenFn(item.subitems)
//             temArray.push(item.name)
//         })
//     }
//     flattenFn(mainObj)
//     return temArray.sort();
// }

// OR //

function flattenObj(mainObj, key){
    var tampArray = []
    function flattenFun(Obj){
      Obj.map((item)=>{
          if(item[key]) flattenFun(item[key])
          tampArray.push(item.name)
      })
    }
    flattenFun(mainObj)
    return tampArray.sort() 
}
console.log(flattenObj(hello, "subitems"))

// console.log("create an array and add name like this ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6']");
// console.log(flattenObj(hello));
//16:
//====
let array_1 = [
    [1, 2],
    [3, 4],
    [5, 6],[7, 8, 9],
    [10, 11, 12, 13, 14, 15]
];
console.log(flattenArray(array_1));

const array_2 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(flattenArray(array_2));

function flattenArray(mainArray){
    let temArray = []
    function flattenFn(array){
        array.map((item)=>{
            if(Array.isArray(item)){flattenFn(item)}else{temArray.push(item)}
        })
    }
    flattenFn(mainArray)
    return temArray.sort((a, b)=>{a - b});
}
//17:
//====
const array = [
    [1,2],
    [6,5],
    [4,2],
    [3,8,[8,9,25,],85,1,36],
    [7,8],
    ]
    
function costumFlat(arr, depth=1){
    let result = []
    arr.forEach((arr)=>{
        if(Array.isArray(arr) && depth > 0){
        result.push(...costumFlat(arr, depth - 1))
        }else{
            result.push(arr)
        }
    })
    
    return result;
}

//18:
//=======
const arrayA = ["Ketan", "Megha", "Swati", "Archana", "Vijay", "Pramatae", "Dishant", "Rajani", "Dattarraya"]
const arrayB = ["Megha", "Swati", "Archana", "Vijay", "Pramatae"]

//Find common data
const newArrayA = arrayA.filter((item)=>arrayB.includes(item))

//Removed common data
const newArrayB = arrayA.filter((item)=>!arrayB.includes(item))
console.log(newArrayB);

//console.log(costumFlat(array,2))

const skillData_a = [
    {id: 1, name: "JavaScript"},
    {id: 2, name: "ReactJs"},
    {id: 3, name: "ES6"},
    {id: 4, name: "Sass"},
    {id: 5, name: "CSS"},
    {id: 6, name: "SCSS"},
    {id: 7, name: "jQuery"},
    {id: 8, name: "TypeScript"},
    {id: 9, name: "nestjs"},
    {id: 10, name: "Next Js"},
    {id: 11, name: "HTML"},
    {id: 12, name: "Ajax"},
    {id: 13, name: "Vite"},
    {id: 14, name: "Node"},
    {id: 15, name: "Bootstrap"},
  ]
const skillData_b = [
    {id: 1, name: "JavaScript"},
    {id: 2, name: "ReactJs"},
    {id: 3, name: "ES6"},
    {id: 4, name: "Sass"},
    {id: 5, name: "CSS"},
    {id: 6, name: "SCSS"},
    {id: 7, name: "jQuery"},
    {id: 14, name: "Node"},
    {id: 15, name: "Bootstrap"},
  ]

const arrayAA = skillData_a.map((item)=>item.name)
const arrayBB = skillData_b.map((item)=>item.name)

console.log("A: ",arrayAA);
console.log("B: ",arrayBB);

const rastData = skillData_a.filter((item)=>!arrayBB.includes(item.name))

console.log(rastData)

//Taks 02A: write javascript for sort Array data in to ascending order Or Bubble sort javascript
//var array = ["z", "e", "g", "b", "q", "s", "n"]
var array = [243, 45, 23, 356, 3, 5346, 35, 5];
// Creating the bblSort function
function bblSort(arr) {

    for (var i = 0; i < arr.length; i++) {

        // Last i elements are already in place 
        for (var j = 0; j < (arr.length - i - 1); j++) {

            // Checking if the item at present iteration
            // is greater than the next iteration
            if (arr[j] > arr[j + 1]) {
                // If the condition is true then swap them
                var temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
            }
        }
    }
    // Print the sorted array
    console.log(arr);
}
// console.log("Bubble sort javascript");
// bblSort(array);

//Taks 02: This example uses compare function to sort the array elements in ascending order.

// Declare and initialize an Array
var marks = [12, 25, 31, 23, 75, 81, 100];

// Print Before sorting array
// console.log("Original Array");
// console.log(marks);

// Sort elements using compare method
// console.log("Sort elements using compare method");
// marks.sort(function(a, b){return a - b});

// Print sorted Numeric array
// console.log(marks.reduce((acc, curr, i, array)=>{
//     return acc+curr
// }, 0));      

//Interview Scheduled for React UI Developer at NeoZoom Technologies with Ketan
//Saturday, 25 February 2023⋅16:15 – 16:45
//#1. Task Remove duplicate data and arrange into descending order
var array = [25, 85, 100, 235, 85, 25, 50, 50]
var newArray = [...new Set(array)]
var DSO = newArray.sort(function (a, b) { return b - a });
//console.log("Task Remove duplicate data and arrange into descending order");
//console.log(DSO);

////Persistent Systems 03 - Interview 4 March at 2:30 PM
// 1) 
const myArr = [11, 22, 33, 22, 33, 77, 33, 44, 55, 66]

// a) Find largest Number (Expected output = 77)
//console.log("Find largest Number")
//console.log(Math.max.apply(null, myArr))
//console.log(Math.min.apply(null, myArr))

// b) Find duplicates in above array (Expected output = [22,33])
let tempArray = []
let dupArray = []
for (var i = 0; i < myArr.length; i++) {
    if (tempArray.indexOf(myArr[i]) > - 1) {
        dupArray.push(myArr[i]);
    }
    tempArray.push(myArr[i])
}
//console.log("Find duplicates in above array");
//console.log([...new Set(dupArray)])

// c)Write a recursive function to find sum of all numbers in above array
let sum = myArr.reduce((acc, cur, i, myArr) => {
    return acc + cur
}, 0);
// console.log("find sum of all numbers in above array");
// console.log(sum)

// 2)
const employees = [{
    "name": "Pooja",
    "yrsOfExperience": "2",
    "city": "Mumbai"
}, {
    "name": "Anuj",
    "yrsOfExperience": "10",
    "city": "Pune"
}, {
    "name": "Sam",
    "yrsOfExperience": "6",
    "city": "Bangalore"
}];

/*Use ES6 array methods*/
//1. Sort employees by yrsOfExperience
var shortData = employees.sort(function (a, b) {
    return a.yrsOfExperience - b.yrsOfExperience;
});
// console.log("Sort employees by yrsOfExperience: ")
// console.log(shortData);

//2. Find employees with city Pune.
var puneEmp = employees.filter((emp) => { return emp.city == "Pune" })
// console.log("Find employees with city Pune");
// console.log(puneEmp)

//3. Add new property “grade” with value "5" to only those employees whose yrsOfExperience is greater than and equal to 5 */
var gradeArray = employees.filter((emp) => { return emp.yrsOfExperience >= 5 })
var updatedArray = gradeArray.map((emp) => { emp.grade = 5; return emp})
//OR
//var updatedArray = employees.filter((emp) => { return emp.yrsOfExperience >= 5 }).map((emp) => { return emp.grade = 5; return emp})
// console.log("Add new property “grade” with value '5' to only those employees whose yrsOfExperience is greater than and equal to 5")
// console.log(gradeArray)

//OR

//const employeesData = employees.filter((emp) => emp.yrsOfExperience>5).map((emp)=>{ emp.grade=5; return emp})
//console.log(employeesData)

//3) Get the value of email by destructuring
const json = {
    "employees": {
        "name": "abc",
        "city": "xyz",
        "contact": {
            "email": "abc@test.com",
            "number": "123"
        }
    }
}
// const {employees:{contact:{email}} }= json
// console.log(email)

//console.log(email)
// console.log("Get the value of email by destructuring");
// console.log(email);

function charCount_kamleshVersion01(string) {
    console.log("Char count");
    let charCount = [...string].reduce((tmp, item) => {
        if (!tmp[item]) {
            tmp[item] = 0;
        }
        tmp[item]++;
        return tmp;
    }, {});    

    // converting to array
    let formatedArray = Object.keys(charCount).map(item=>(item+':'+charCount[item]));
    console.log('String:',string);
    console.log('Char Count Object:',charCount);

    console.log('formated Array:',formatedArray);
    console.log('formated String:',formatedArray.join(', '));

}
//charCount_kamleshVersion01("abcdbabdcbed")

//OR

// const charCount = {};

// for (const char of str) {
//   charCount[char] = (charCount[char] || 0) + 1;
// }

// console.log(charCount);


 //3) Get the value of email by destructuring
 const user = {
    name: "Ketan",
    age: 39
}

//Shallow Cop to Deep copy
const user_deep = {
    name: "Ketan",
    age: 39
}

//let user2 = Object.assign({},user_deep);
//let user2 = JSON.parse(JSON.stringify(user_deep));
let user2 = {...user_deep}
//user2.name = "Dishant"
//console.log(user_deep, user2);

//-----------------------------------------
//Create Debounce() Polyfill Implementation
//-----------------------------------------
// const myDeunceCount = (cb, d) =>{
//     let timer;
//     return function(...args){
//         if(timer) clearTimeout(timer);
//         timer = setTimeout(()=>{
//             cb(...args);
//         },d)
//     }
//  }

//-----------------------------------------
//Create Throttle Polyfill Implementation
//-----------------------------------------
// const myThrottle = (cb, d)=>{
//     let last = 0;
//     return function(...args){
//         let now = new Date().getTime();
//         if(now - last < d) return;
//             last = now;
//             return cb(...args);        
//     };
// };

//const items = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] //… your array, filled with values
// const n = 2 //tweak this to add more items per line

// const result = new Array(Math.ceil(items.length / n))
//   .fill()
//   .map(_ => items.splice(0, n))
//   console.log(result)

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const chunkSize = 3; 
// const chunks = [];

// for (let i = 0; i < arr.length; i += chunkSize) {
//   const chunk = arr.slice(i, i + chunkSize);
//   chunks.push(chunk);
// }

// console.log(chunks); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]

//React.js_ Interview Request _ Synechron Technologies_ Ketan Sawant
//Monday, 27 February⋅17:30 – 18:00
//print state name, population and patients
  const data = [
    {
      name: "goa",
      population: 1000,
      isValid: false
    },
    {
      name: "maharashtra",
      population: 100000,
      isValid: false
    },
    {
      name: "Kerala",
      population: 1000,
      isValid: false
    },
    {
      name: "Delhi",
      population: 100000,
      isValid: false
    },
    {
      name: "Kolkata",

      population: 1000,

      isValid: false
    },
    {
      name: "UP",

      population: 100000,

      isValid: false
    },

    {
      name: "Sikkim",

      population: 1000,

      isValid: true
    },
    {
      name: "Ladakh",

      population: 100000,

      isValid: true
    }
  ];

  const covid_count = [
    {
      name: "Kolkata",

      patients: 20
    },
    {
      name: "UP",

      patients: 100
    },

    {
      name: "Sikkim",

      patients: 10
    },
    {
      name: "Ladakh",

      patients: 10
    }
  ]

//   var newData = covid_count.map((state) => {
//     let populationData = data.filter((sta) => sta.name === state.name);
//     const {population} = populationData[0] //0: Object { name: "Kolkata", population: 1000, isValid: false }
//     console.log(population);
//     let updatedData = {
//       name: state.name,
//       population: population,
//       patients: state.patients
//     };
//     return updatedData;
//   });
//   console.log(newData);

//Or

const updatedData = covid_count.map((item)=>{
    const population = data.filter((data)=> data.name === item.name)[0].population
    const newData = {...item, population}
    return newData
})
console.log(updatedData)

//Video-Conference: Technical 1 of SENIOR TECHNICAL MEMBER
//Thursday, May 9⋅12:00 – 12:30
// [12:03 PM] Nikita Agarwal
// Q #1.
// var x = 10;
// function foo() {
//   console.log(x);
//   var x = 20;
// }
// foo();

// [12:04 PM] Nikita Agarwal
// Q #2.
let people = [
    {name: 'Alice',age: 21},
    {name: 'MAX', age: 20}, 
    {name: 'Jane', age: 20}
    ];
let propleGroup = []
people.forEach((item)=>{
 const{name, age}=item
 propleGroup =  people.filter((fitem)=> fitem.age === age)
})
console.log(propleGroup)
// Or
// duplicateData = people.reduce((acc,cur)=>{
//     if(!acc[cur.age])acc[cur.age] =0
//     acc[cur.age]++
//     return acc
// },{})
// console.log(duplicateData);

// Q #3. count book
let frnds = [{
	name: 'Anna',
	books: ['Bible', 'Harry potter'],
	age: 21
}, {
	name: 'Bob',
	books: ['war and peace', 'Romeo and juliet'],
	age: 26
}, {
	name: 'Alice',
	books: ['The lord of the rings', 'the shining'],
	age: 18
}]

// const newBooks = frnds.reduce((acc, curr)=>[...acc, curr.books],[])
// const newBookArray = newBooks.flat()
// OR
// const countBook = frnds.reduce((acc, crr)=>{
//     return [ ...acc, crr.books].flat()
//  },[])
// console.log(newBookArray)
// console.log(newBookArray.length)

// total this by using reduce
// Note key are Same
// const foo = [{a:1},{a:2},{a:3}];
// const total = foo.reduce((acc, crr)=>{ 
//    console.log("acc", acc)
//    console.log("crr", crr.a)
//    acc += crr.a
//     return acc
// }, 0)
// console.log(total)

// total this by using reduce
// Note key are deffrent
// const foo = [{a:1},{b:2},{c:3}];
// const total = foo.reduce((acc, crr)=>{ 
//    console.log("acc", acc)
//    console.log("crr", Object.values(crr)[0])
//    acc.total += Object.values(crr)[0]
//    return acc
// },{total: 0})
// OR
// const total = foo.reduce((acc, crr)=> acc += Object.values(crr)[0],0)
// console.log(total)

// Go Digit- UI Lead - Ketan Sawant - May 15 , 2024  2:00 PM India
// Wednesday, 15 May⋅14:00 – 14:30
//========================================
// #1.How to swap two numbers without using a temporary variable?
var x=10
var y=25

x = x+y //35
console.log(x)
y = x-y //(35 - 25 = 10)
console.log("y: ", y)
x = x-y //(35 - 10 = 25)
console.log("x: ",x)

// What's the Output?

// for(var i=0; i<3; i++){
//     setTimeout(() => {
//       console.log(i)  
//     }, 1000);
// }
// Output: 333

// fixed with let or closer
// for(var i=0; i<3; i++){
//     let a = i;
//     setTimeout(() => {
//       console.log(a) ; 
//     }, 1000);
// }
// Output: 012

// Technical Discussion for Ketan- ReactJS - infosys
// Tuesday, 25 June⋅15:30 – 16:00
// HR:nikita_kuvalekar@infosys.com
// alpeshtanaji.damame@infosys.com
//========================================

// Ignore blank spaces
function charCount(string){
    const strArray =  string.replace(/\s+/g,'');
    //const countChar = [...strArray].filter((item)=> item !== " ").reduce((acc, crr)=>{
    const countChar = [...strArray].reduce((acc, crr)=>{
        if(!acc[crr]) acc[crr]=0;
        acc[crr]++
        return acc
    },{})
    
    console.log(countChar)
}
//charCount("abc dbabdc bed")

//find avg of array data 
var arr = [25,36,85,74,15,36,95]

var totalOfArr = arr.reduce((acc, cur)=>{
    acc+=cur
    return acc
},0)
var avg = Math.round(totalOfArr/arr.length)
//console.log(avg)

// Ketan Sawant - FE -R2 - eventbeep
// Friday, 5 July⋅15:00 – 16:00
// HR:nafisa.shaikh@eventbeep.com
// Developer:shobhit.agarwal@eventbeep.com
//========================================

// #1. Reverse string
var string = "ketan dattatraya sawant"
// string to array
var strArray = string.split(' ')
// reverse array
var revStrArray = strArray.reverse().join(" ")
console.log(revStrArray)


//The gate Way corp
//Wednesday, August 28⋅16:00 – 17:00
//hr@thegatewaycorp.com
//dimple.tiwari@thegatewaycorp.com or call me on +916359884716.
//========================================

//6. Write a piece of code for the following problem and analyze its complexity: 
//Given an array of distinct integers and a target sum, find two numbers in the array that add up to the target sum.
function findTwoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      console.log(i + " : " + j);
      if (nums[i] + nums[j] == target) {
        return [nums[i], nums[j]];
      }
    }
  }
}

console.log(findTwoSum([7, 11, 15, 2], 26));
console.log(findTwoSum([5, 3, 5, 7], 10));


// var a ="10"
// var b =10
// console.log(a==b) //true
// console.log(a===b) //false

// var a=10
// var b=a++ //11
// var c=++a //12
// console.log(a,b,c) //true 12, 10, 12 

// var y={}
// var x=y
// x.a = 10
// console.log(y) 

// Tech discussion_Lead React developer_KETAN SAWANT
// Company : Moolya.com
// HR: ranjitha.c@moolya.com
// sudhir.reddy@moolya.com
// Thursday, 29 August⋅16:00 – 16:45
//========================================

// srt = '03Ju23st 15te5ll10 12me6 3the ti45me 09f567or 06bu7s'
// //The parseFloat() method parses a value as a string and returns the first number.
// function isNumeric(str) {
//   if (typeof str != "string") return false; // we only process strings!
//   return (
//     !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
//     //The parseFloat() method parses a value as a string and returns the first number.
//     !isNaN(parseFloat(str))
//   ); // ...and ensure strings of whitespace fail
// }
// //console.log(isNumeric("k"))
// function sumOfString(srt) {
//   const stringArray = [...srt];
//   const numberArraay = stringArray.filter((item) => isNumeric(item));
//   const sum = numberArraay.reduce((acc, cur) => {
//     acc += Number(cur);
//     return acc;
//   }, 0);
//   console.log(sum);
// }

// sumOfString(srt)

//Or

// const str = "03Ju23st 15te5ll10 12me6 3the ti45me 09f567or 06bu7s";
// const total = str.match(/\d/g).map(Number).reduce((sum, num) => sum + num, 0);
// console.log("Total Sum:", total);

//========================================
//========================================
// find only number from string
//========================================
//========================================
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

//======= DOB ========//

// var dob = new Date("12/29/1974");
// //calculate month difference from current date in time
// var month_diff = Date.now() - dob.getTime();

// //convert the calculated difference in date format
// var age_dt = new Date(month_diff); 

// //extract year from date    
// var year = age_dt.getUTCFullYear();

// //now calculate the age of the user
// var age = Math.abs(year - 1970);

// //display the calculated age
// document.write("Age of the date entered: " + age + " years");

//Interview Scheduled with Hexaware Technologies
//Wednesday, 18 September⋅11:15 – 12:00
//==========================================
// let y = true + true // 1+1 = 2
// let x = y + false // 2+0 = 2
// console.log(x) //2

// let x = false
// let y = "0"
// let z = 0

// console.log(x==y) // false
// console.log(x==z) // true

// let x = "false"
// let y = !x
// console.log(y) // false

//L1 Interview with GS Lab | GAVS!
//Wednesday, September 25 17:00 – 18:00
// HR isha.limaye@gslab.com
//======================================
// Sagir S Shaikh
// 17:21
// str=’welcome to javascript !!’
// o/p= “welcome_to_javascript_!!”
// String.prototype.rePlace = function(find, replace){
//     let strArray = this.split(find);
//     return strArray.join(replace);
// }

// str='welcome to javascript !!'

// console.log(str.rePlace(" ", "_"))
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
// function getMaxLength(arr, n) {
//     // initialize count
//     let count = 0;

//     // initialize max
//     let result = 0;

//     for (let i = 0; i < n; i++) {
//         // Reset count when 0 is found
//         if (arr[i] == 0)
//             count = 0;

//         // If 1 is found, increment
//         // count and update result
//         // if count becomes more.
//         else {
//             // increase count
//             count++;
//             result = Math.max(result, count);
//         }
//     }

//     return result;
// }

// // Driver code
// let arr = new Array(1, 1, 0, 0, 1, 0,
//     1, 0, 1, 1, 1, 1);
// let n = arr.length;
// document.write(getMaxLength(arr, n));

// // This code is contributed by gfgking

//======================================
//Rajendra Kumar Naroliya- organiser
//ketandutt@gmail.com
//Sat Oct 12, 2024 20:00 – 21:00 (IST)
//======================================
let array = [85,32,95,45,25,1,62]

function sortMeth(arr){
    
    for(let i = 0; i<arr.length; i++){
        for(let j = 0; j<(arr.length - i - 1); j++){
            var temVar
            if(arr[j]>arr[j+1]){
               temVar =  arr[j];
               arr[j] = arr[j+1]
               arr[j+1] = temVar
            }
        }
    }
    return arr
}

console.log(sortMeth(array))

function secondLag(arr){
    arr.pop()
    let sed_maxNumber = Math.max.apply(null, arr);
    console.log(sed_maxNumber)
}

secondLag(array);

(function(){
  	  var a = b = 3;
	})();
    
console.log("a defined? " + (typeof a !== 'undefined')); //false
console.log("b defined? " + (typeof b !== 'undefined')); // true

//Ketan Daddatraya Sawant - React + Typescript - Discussion
//Thursday, 17 October⋅15:15 – 16:15
//prabhu.ayyamperumal@wipro.com
// HR Deepak : 9844995479
//======================================

//#1 Remove OR delete 3 from array
let array = [1, 2, 3, 4, 5];

// Remove item at index 2
array.splice(2, 1);

console.log(array); 

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
//Technical Interview - Ketan Sawant (React js)
//HR: Shraddha Soni, Pammal: ashish.vadhwa@netweb.biz
//Monday, 25 November⋅14:00 – 15:00
//======================================

setTimeout(function() {
    console.log('firsttimeout');
}, 0);
setImmediate(function() {
    console.log('Immediate Func');
}, 0);
setTimeout(function() {
    console.log('Timedout again');
}, 10);
Promise.resolve(1).then(function() {
    console.log('Promise');
});
process.nextTick(function() {
    console.log("processing next");
});
console.log("John");

//Output
// John
// processing next
// Promise
// firsttimeout
// Immediate Func
// Timedout again

//======================================
// Interview scheduled with Hexaware Technologies
// Hexaware Technologies via GLIDER.ai - Ketan Sawant[sawant.megha1980@gmail.com] (React js) 
// HR: Shubham (Hexaware Technologies), Pammal: ashish.vadhwa@netweb.biz
//Tue Dec 3, 2024 3pm – 3:45pm (IST)
//======================================
function findMaxChar(str, char){
    let strArray = [...str]
    let lengthOfStr = strArray.filter((item)=> item === char).length
    if(lengthOfStr>1){
        return true
    }else{
        return false
    }
}

console.log(findMaxChar("aabbbcceeem", "k")) //false
console.log(findMaxChar("aabbbcceeem", "m")) //false
console.log(findMaxChar("aabbbcceeem", "a")) //true

//======================================
// find capital character in the string
//======================================
let str="Ketan Sawant"

function capIndex(string){
    let capArray = []
   for(let i = 0; i<string.length; i++){
      if(string[i] === string[i].toUpperCase() && string[i] !==" " ){ 
          capArray.push(i);
      }
   }
   return capArray
}

console.log(capIndex(str))

//=======================================
// Hexaware Technologies -- Technical round of Ketan Sawant
// HR: Amit Gupta [9315980576] (Hexaware Technologies), Pammal: viveks1@hexaware.com
// Friday, December 6⋅12:30 – 13:00
//=======================================
function foo(){
    let a=b=0
    a++
    return a
}
foo();
console.log(typeof a) //undefined
console.log(typeof b) //number