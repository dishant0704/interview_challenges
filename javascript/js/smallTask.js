const themes = [
    { id: 1, value: "k-2" }, 
    { id: 2, value: "3-5" }, 
    { id: 3, value: "6-8" }, 
    { id: 4, value: "9-12" }
];

//Q1: I want to get index of element whose value is equal to "6-8".
for(var i=1; i<themes.length; i++){
    if(themes[i].value == "6-8"){
        console.log(i) // 2
    }
}

//Q2: Destructur above array
const [a, b, c, d] = themes
console.log(b) // { id: 2, value: "3-5" }

//Q3: Merge one array to another javascript
const arr1 = ["Cecilie", "Lone"];
const arr2 = ["Emil", "Tobias", "Linus"];

arr1.push.apply(arr1, arr2);
console.log("===|| two ||===")
console.log(arr1);

//Q4: Merge array create new array
const arr3 = ["Cecilie", "Lone"];
const arr4 = ["Emil", "Tobias", "Linus"];
const arr5 = ["Robin"];
const children = arr3.concat(arr4, arr5);
console.log("===|| three ||===")
console.log(children)

//Q5: Merge two array find max number
const num01 = [2, 8, 7, 9, 45, 92, 20]
const num02 = [21, 18, 67, 19, 40, 100, 120]

const newNumArray = num01.concat(num02);
console.log(newNumArray);
const max = Math.max.apply(null, newNumArray)
console.log(max);
const min = Math.min.apply(null, newNumArray)
console.log(min);

//Q6: infinite currying
function mul(a){
    return function(b){
        if(b) return mul(a*b)
        return a
    }
}

console.log(mul(5)(2)(5)(2)())
//Q: print name
const obj_Q = {
    name : 'John',
    getmyName : function(){
       function printName(){
         return `Hi ${this.name}`;
       }
       return printName;
    }
  }
 
console.log(obj_Q.getmyName()())

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

