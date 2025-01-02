//==========================================================
// 01: HackerRank Problem solving in JavaScript (Encryption)
//==========================================================
//https://www.hackerrank.com/challenges/encryption/problem?isFullScreen=true

const str = 'havean  iceday';

/*
 * Complete the 'encryption' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function encryption(s) {
    // Write your code here    
    //removed spaces
    let newString = s.replace(/\s/g,"");
    let stringLength = newString.length;
    let rows = Math.floor(Math.sqrt(stringLength))
    let clos = Math.ceil(Math.sqrt(stringLength))
    let returnStr = ""
    //console.log(Math.sqrt(stringLength))
    //console.log(stringLength, rows, clos)
    // increse rows
    if(rows * clos < stringLength){
        rows++
    };
    //forloop
    for(let i=0; i<clos; i++){
        let jump = 0;
        while(i+jump <stringLength ){
          returnStr += newString[i+jump];
          console.log(i, jump)
          console.log("==>",i+jump)
          jump += clos
        }
        returnStr += " "
    }
    return returnStr

}

console.log(encryption(str))
