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

//==========================================================
// 02: HackerRank Problem solving in JavaScript (Repeated String)
//==========================================================
//https://www.hackerrank.com/challenges/repeated-string/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign

/*
 * Complete the 'repeatedString' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. STRING s
 *  2. LONG_INTEGER n
 */

function repeatedString(s, n) {
    // Count 'a's in the original string 's'
    let countAInS = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === 'a') {
            countAInS++;
        }
    }
    // Calculate how many times the full string 's' repeats within 'n' characters
    const fullRepeats = Math.floor(n / s.length);
    let totalAs = countAInS * fullRepeats;

    // Calculate the remaining characters after the full repetitions
    const remainingChars = n % s.length;

    // Count 'a's in the prefix of 's' corresponding to the remaining characters
    for (let i = 0; i < remainingChars; i++) {
        if (s[i] === 'a') {
            totalAs++;
        }
    }

    return totalAs;
}

// Test case
// let s="aba", n=10
// let s="a", n=1000000000000
let s="abcac", n=10

console.log(repeatedString(s, n))


