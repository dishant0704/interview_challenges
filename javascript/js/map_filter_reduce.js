// map, filter and reduce

// what is map?
// map id used to create new array from exiting array
const nums01 = [5, 6, 7, 2, 1]

const multiNums = nums01.map((num, i, arr)=>{return num*3})

//console.log(multiNums);

// what is filter?
// return only those eliment return which fullfill the condition 

const moreThan5 = nums01.filter((num)=>{ return num > 5})
//console.log(moreThan5);

// what is reduce?
//Reduces reduce the value down to just one value

const arraySum = nums01.reduce((acc, curr, i, array)=>{
    return acc + curr;
}, 0)

// 0+5=5
//5+6=11
//11+7=18
//18+2=20
//20+1=21

//console.log(arraySum);

//Polyfill
//========

//myMap
//-----

Array.prototype.myMap = function(cb){
    let tempArray = [];
    for(let i=0; i<this.length; i++){
        tempArray.push(cb(this[i], i, this))
    }
    return tempArray;
}

//console.log(nums01.myMap((num, i, arr)=>{return num*3}));

//myFilter
//-----

Array.prototype.myFilter = function(cb){
    let tempArray = []
    for(let i=0;i<this.length; i++){
        if(cb(this[i],i,this)) tempArray.push(this[i])
    }
    return tempArray
}
//console.log(nums01.myFilter((num)=>{ return num > 6}))

//myReduce
//-----

Array.prototype.myReduce = function(cb, initialvalue){
    var accumulator = initialvalue
    for(let i=0; i<this.length; i++){
        accumulator = accumulator? cb(accumulator, this[i], i, this): this[i];
    }
    return accumulator
}

const arraySum01 = nums01.myReduce((acc, curr, i, array)=>{
    return acc + curr;
}, 0)

//console.log(arraySum01)

let students = [
    {name: "Dishant", rollNumber: 54 , marks: 87},
    {name: "Krisha", rollNumber: 34 , marks: 95},
    {name: "Dharmesh", rollNumber: 24 , marks: 45},
    {name: "Rakesh", rollNumber: 60 , marks: 75},
    {name: "Ketan", rollNumber: 52 , marks: 89}
]

//Q1 Return only name of students in capital
//------------------------------------------
// const studentsName = students.map((student) => student.name.toUpperCase())
// console.log(studentsName);

//Q2 Return only details of those who scored more than 60 marks
//-------------------------------------------------------------
// const studentsName = students.filter( (student) => {return student.marks>60})
// console.log(studentsName);

//Q3 Return only details of those who hase marks more than 60 and roll number grater than 20
//------------------------------------------------------------------------------------------
// const studentsName = students.filter( (student) => {return student.marks>60 && student.rollNumber > 20})
// console.log(studentsName);

//Q4 Return sum of marks of all students
//--------------------------------------
//const studentsName = students.reduce( (acc, curr, i, arr) => {return acc + curr.marks}, 0);
//console.log(studentsName);

//Q5 Return only name of students who scored morethan 60
//------------------------------------------------------
// const studentsName = students.filter((student) => {return student.marks > 60}).map((student) => {return student.name.toUpperCase()})
// console.log(studentsName);

//Q6 A. Return total marks for students with marks grater than 60
//Q6 B. After 20 marks have been added to those who scored less than 60 
//---------------------------------------------------------------------
const studentsNameA = students.filter((student) => {return student.marks > 60}).reduce((acc, curr, i, array) => {return acc + curr.marks}, 0)
console.log("A: "+studentsNameA);

const studentsNameB = students.map((student) => {
    if(student.marks < 60){
        student.marks += 20
    }
    return student.marks   
    }).reduce((acc, curr, i, array) => {return acc + curr}, 0)
console.log("B: "+studentsNameB);