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

//Q2: Destructur above array
const [a, b, c, d] = themes
//console.log(b) // { id: 2, value: "3-5" }

//Q3: Merge one array to another javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

arr1.push.apply(arr1, arr2);
//console.log("===|| two ||===")
//console.log(arr1);

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

//Q6: infinite currying
function mul(a) {
    return function (b) {
        if (b) return mul(a * b)
        return a
    }
}

//console.log(mul(5)(2)(5)(2)())
//Q: print name
const obj_Q = {
    name: 'John',
    getmyName: function () {
        function printName() {
            return `Hi ${this.name}`;
        }
        return printName;
    }
}

//console.log(obj_Q.getmyName()())

//ANS: As below 
// const obj = {
//     name : 'John',
//     getmyName : function(){
//        var name = this.name
//        function printName(){
//          return `Hi ${this.name}`;
//        }
//        return printName;
//     }
//   }

//   console.log(obj.getmyName()())

//Q7: remove duplicate entry or data from JavaScript Array [3i Infotech]

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

//Q8: what is output of below code
// Interview - Ketan - L1 UI Reactjs - Hexaware Technologies
var array = [1, 2, 3, 4,]
array.length = 0 // try this array.length = 3
//console.log(array) //[]
//console.log(array[0]) //undefined

//### || JavaScript Array Methods || ###
//https://www.w3schools.com/js/js_array_methods.asp

var array = ["Banana", "Orange", "Apple", "Mango"];

//Q9: Delete last Array Item
//console.log(array);
//array.pop()
//console.log(array);

//10: Removes the first array element and "shifts" all other elements to a lower index.
//Ans: The shift() method returns the value that was "shifted out":
// array.shift();
// console.log(array);

//The splice() methods can be used to remove array elements:
// array.splice(0, 1);
// console.log(array);

//10: Adds a new element to an array (at the beginning).
//Ans: The unshift() method returns the new array length:
// array.unshift("Ketan");
// console.log(array);

//11: Delete Array item.
// Note: Using delete leaves undefined holes in the array. Use pop() or shift() instead of delete.
// console.log(array);
// delete array[1]
//now index 1 is empty
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
//console.log(array.slice(1, 3));

//14: Natty Hatty | React JS Developer | Preliminary Interview
//Friday, 24 February⋅16:00 – 17:00

//Task A: create an array and add name like this ["Menu 1", "Menu 2", "Menu 3", "Menu 4", "Menu 5", "Menu 6"]
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

var nameArray = [];

var findItem = (array) => {
    const newArray = array.map((item) => {
        nameArray.push(item.name)
        if (item.subitems) {
            const subItemArray = item.subitems
            findItem(subItemArray)
        }
    })
    return newArray
}
findItem(hello)

// console.log("create an array and add name like this ['Menu 1', 'Menu 2', 'Menu 3', 'Menu 4', 'Menu 5', 'Menu 6']");
// console.log(nameArray);

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
//Task Remove duplicate data and arrange into descending order
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
var updatedArray = gradeArray.map((emp) => { return emp.grade = 5 })
// console.log("Add new property “grade” with value '5' to only those employees whose yrsOfExperience is greater than and equal to 5")
// console.log(gradeArray)

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
const email = json.employees.contact.email
    // console.log("Get the value of email by destructuring");
    // console.log(email);

const string = function(){

    const character  = ["A", "B", "C", "D", "E", "F",  "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
    "a", "b", "c", "d", "e", "f",  "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "_", "-", "@", "#", "&", "*", "!"," "]

    const encode = function(str){
        const charArray = [...str]
        let newString = "";
        for(var i=0; i<charArray.length; i++){
            let currCharIndex = character.indexOf(charArray[i])
            if( currCharIndex > -1){
                if(currCharIndex < 10){newString = newString+"0"+currCharIndex}else{newString = newString+currCharIndex}
                
            }            
        }
        return newString;
    }
    const decode = function(str){
        const charArray = [...str]
        let newString = "";
        let array = [];
        let arrEnt = 2
        let lastEnt = 0;
        for(var i=0; i<charArray.length; i++){   
            newString = newString+charArray[i]         
            if(i > lastEnt){
                lastEnt = arrEnt+i
                console.log(i+" == "+lastEnt);
                array.push(Number(newString));
                newString =""
            }
        }
        
        return array;
    } 
    return {encode, decode};
}
let newString = string()
console.log(newString.encode("Ketan"));
console.log(newString.decode("1030452639"));