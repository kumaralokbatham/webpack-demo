// let num1 = prompt("Enter the Ist Number");
// let num2 = prompt("Enter the Second Number");
// let opr =  prompt("Please select among these");
// switch (opr) {
//     case "+":
//         var res = parseFloat(num1)+parseFloat(num2);
//         console.log(`${num1}+${num2} is = ${res}`)

//const { reverse } = require("lodash");

// const { replace } = require("lodash")

//         break;
//     case "-":
//     var res = parseFloat(num1)-parseFloat(num2);
//     console.log(`${num1}-${num2} is = ${res}`)
//        break;
//     case "*":
//        var res = parseFloat(num1)*parseFloat(num2);
//        console.log(`${num1}*${num2} is = ${res}`)
//           break;
//     case "/":
//         var res = parseFloat(num1) / parseFloat(num2);
//         console.log(`${num1}/ ${num2}is ${res}`);
//         break;

//     default:
//         console.log("Invalid Operator");
//         break;
// }

// let a = prompt("Enetr the 1st Number");
// let b = prompt("Enter the 2nd Number");
// let c = prompt("Enter the 3rd Number");

// let res1 = a%10;
// let res2 = b%10;
// let res3 = c%10;

// if (res1== res2 && res1==res3) {
//     console.log(`${a},${b},${c} having same last didgit number`);
// } else {
//     console.log(`${a},${b},${c}  not having same last didgit number`);

// }

// function check(num1,num2, num3){

//     let lastdigit1 = num1%10;
//     let lastdigit2 = num2%10;
//     let lastdigit3 = num3%10;

//     if(lastdigit1==lastdigit2 && lastdigit1==lastdigit3){
//         return ("Numbers have same last Digit");

//     }else{
//         return("Numbers have not  same last Digit");
//     }

// }
// console.log(check(12,38,42));

// PrinT the Fibonnaci series..

// let a = 0;
// let b = 1;
// console.log(a);
// console.log(b);
// for(let i=0; i<=10; i++){
//     let temp = a+b;
//     console.log(temp);
//     a=b;
//     b=temp;

// }

// factor of a given number:

// function checkFactor(number){
// for( let i=1; i<=number; i++){
//     if(number%i==0){
//         console.log("i");

//     }
// }
// }
// checkFactor(10);

// sum of natural number:

// function sum(number){
//     let sumN= 0;
//      for( let i= 1; i<=number; i++ ){
//         sumN+=i;

//     }
//     return sumN;
// }
// console.log(sum(10));

// Sum of Natural Number using Recursion:
// function sum(num){
//     if(num>0){
//         return num+ sum(num-1);
//     }else
//     return num;
// }
// console.log(sum(5));

// Find The Palindrome String
//    let string= prompt("Enter The String");
//     let len = string.length;
//     let msg =  "It is a Palindrome ";
//     for(let i=0; i<=len/2; i++){
//         if(string[i]!= string[len-1-i]){
//             msg= "It is not a Palindrome"
//         }
//         console.log(`${string}: ${msg}`);
//     }

// sort words in alphabetical order
// let string= "this is my string"
// let resultString = string.split(' ').sort().join('  ');
// console.log(resultString);

// Replace character of string
// let string= "this is the string that is used for in........ "
// let resultString = string.replace('this','dd' );
// console.log(resultString );


// Programm To reverse as string using for loop
let mySentance = "madama";
function reverseAString(argsString) {
  let newString = "";
  for (let i = argsString.length - 1; i >= 0; i--) {
    newString += argsString[i];
  }
  console.log(newString);
  if(newString === argsString) {
    console.log("Your string is palindrom")
  }else {
    console.log("Your string is not palindrom")
  }
  return newString;
}
reverseAString(mySentance);

// programm to count a word in a string;
let myString = "aaaaaabbbbbbbbbbbbbcdefghkkkakkkkk";
let count = "c";
function findNumberofOccurances(tempString, count) {
  let counter = 0;
  for (let i = 0; i < tempString.length; i++) {
    if (tempString[i] == count) {
      counter++;
    }
  }
  console.log(counter);
}
findNumberofOccurances(myString, count);
