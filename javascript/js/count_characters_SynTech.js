//React.js Interview Request Synechron Technologies Ketan Sawant
//Monday, 27 February⋅17:30 – 18:00
//Ketan Sawant

// findCharCount('Ketan Sawant@123kkmm10')

// function findCharCount(str) {
//     var regex = /[a-zA-Z0-9]/g; // only count letters and numbers

//     var finalStr = str.match(regex)
//     var char = "";

//     var charArray = []
//     var countArray = []

//     //console.log("main lenght: " + str.length + ", Final length: " + finalStr.length)

//     for (var i = 0; i < finalStr.length; i++) {
//         var char = finalStr[i];

//         if (charArray.includes(char)) {
//             var dupInx = charArray.indexOf(char)
//             countArray[dupInx]++;
//             //console.log(char + " Repited, ")

//         } else {
//             charArray.push(char);
//             //countArray.char = 1
//             countArray.push(1);
//             //console.log(char);
//         }

//     }

//     console.log(printCharCount(charArray, countArray))
// };


// // Print charector and count array

// function printCharCount(arrayChar, arrayCount) {

//     var printText = "";

//     if (arrayChar.length === arrayCount.length) {

//         for (var i = 0; i < arrayChar.length; i++) {
//             printText = printText + arrayChar[i] + ":" + arrayCount[i] + ", "
//         }

//     } else {
//         console.log("both array count are not equal")
//     }
//     return printText;
// };

// findDuplicateCharCount('Ketan Sawant@123kkmm10')

// function findDuplicateCharCount(string){
//     var tempArray = [];
//     var dupChars = [];
//     var outPutString = ""
//     for(var i=0; i< string.length; i++){
//         if(tempArray.indexOf(string[i]) > -1){
//             dupChars.push(string[i])
//         }else{
//            tempArray.push(string[i]);
//         }
        
//     }
//      for(var i=0; i< dupChars.length; i++){
//          var count = dupChars.filter((iteam) => {if(iteam == dupChars[i]) return iteam})
//          outPutString = outPutString+dupChars[i]+(count.length +1)
//      }
//     console.log(string.length+" = "+tempArray+" || "+dupChars)
//     console.log(outPutString);
// }

// for counting words in a string

//Using Map-Reduce in Javascript: counting words in a string.

function countChar(str){
    let countOfchar = [...str].reduce((acc, curr)=>{
        if(!acc[curr])acc[curr] = 0;
        acc[curr]++
        return acc
    },{})
    let formattedObj = Object.keys(countOfchar).map((key)=> key+":"+countOfchar[key])
    let string = formattedObj.join(", ")
    return string;
}
var string = "dsfaff1131dsfaf3132sdfa"
console.log(countChar(string));

