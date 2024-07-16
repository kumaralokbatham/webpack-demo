import _ from "lodash";
import "./style.css";
// import './factorial';
import './practice2';

// function component() {
//   const element = document.createElement("div");
//Lodash, now imported by this script
//   element.innerHTML = _.join(["Hello", "Alok"], " ");
//   element.classList.add("hello");
//   return element;
// }

// function myFunc() {
//   console.log("Hi I am Alok");
// }

// myFunc();

// document.body.appendChild(component());
// const bikeDetails = {
//   displayDetails: function (regNo, brand) {
//     return this.name + " bike details :" + regNo + ','+brand;
//   }
// }

// const person1 = { name : "Alok"};
// const person2 = {name : "Amit"};
// const person3 = { name : "Anuj"};


// const detailsOfPerson1 = bikeDetails.displayDetails.call(person1, "SFGSFGSF", "Honda");
// const detailsOfPerson2 = bikeDetails.displayDetails.apply(person2, ["SFGSFGSF", "Yamha"]);
// const detailsOfPerson3 = bikeDetails.displayDetails.bind(person3, "dbjd", 'Hero');

// // vjhvhv
// // cc

// // console.log(detailsOfPerson1)
// // console.log(detailsOfPerson2)
// // console.log(detailsOfPerson3())

// // let const var 
// {
  
  
  
// }


// function getUserDetails(user) {
//   const a = [2];
//   a.push(2)
//   return user();
// }



// function user1() {
// return "My Name is Alok";
  
// }

// // Curry Function
// function a(a) {
//   return function b(b) {
//     return function c(c) {
//       return a+b+c;
//     }
//   }
// }

// console.log(a(1)(2)(3));


// console.log(1 == true)

// // console.log(getUserDetails(user1))
// // console.log(a)

// // console.log(a)


// Write a function which takes a string as an argument and return the reverse of that string 

// const str = function a(){
  
// }

// function testFunction(myString) {
//   const stringArray = myString.split(''); // ['A', 'l', 'o', 'k']
//   // Do not use join or reverse 
// //   const outputString = stringArray.reverse().join('');
//   let outputString = '';
//   for (let i = stringArray.length -1; i >= 0; i--){
//     outputString = outputString + stringArray[i]; 
//   }
  
//   return outputString;
  
// }

// const outputString = testFunction('Capital'); // output edcba
// console.log(outputString);

// const outPutArr = [];
// const numberArray = [1,2,3,4,5,6,2,3,4,2,3,2];

// //1. Loop through array 
// //2. 
// //3. 
// //4.

// function removeDuplicate() {
//   //for (let i = 0; i < numberArray.length; i++ )
//     for(let numberArray[i]=numberArray[i]); 
    
//     // Do this Without indexOf 
// //     if(outPutArr.indexOf(numberArray[i]) === -1) {
// //       outPutArr.push(numberArray[i]);
// //     }
//   }

// return outPutArr;
  
  
// }

// console.log(removeDuplicate(), numberArray);
//  let a = prompt("Enter the first  Number ");
// let b= prompt("Enter the second number");
// let c= parseInt(a)+ parseInt(b)

// console.log("the sum of "+a+" and "+b+" is:" +c);

// let a =("Enter a Number ");
// let b = math.sqrt (a);
// console.log(b);

        //Area of triangle 

// var a=3;
// var b=4;
// var c=5;
// var d= (a+b+c)/2;
// console.log(d);
// var AreaOfTriangle=d*(d-a)*(d-b)*(d-c);
// var e= Math.sqrt(AreaOfTriangle);

      // Swapping of two number 

// var a = 4;
// var b = 5;
// var temp=a;
// a= b; 
// b= temp;
// console.log(a,b);

//       nature of number 

// function check(){
//   let value = prompt("enter the value ")
//   if(value>0){
//      return ("this is a positive intiger");
//   }
//  }
// console.log(check());

             //Random number Generate 

// let x  = Math.random();
// x=x*(10000)
// console.log (Math.floor(x));

           //checking number is odd or even

//  let x =7;
// if(x%2==0){
//   console.log(`${x} is the even number`);
// }
// else{
//       console.log(`${x} is the odd number`);

// }

  // using Ternory operator

// let result= x%2==0 ? "Even": "odd"
// console.log(`${x} is the ${result}  Number`)
 
       // Prime Number or Not 


// let a= prompt("Enter The Number");
// if(a==1){
//   console.log(`${a} is not prime aur composite number `);
// }
// else if(a<=0){
//   console.log(`${a} is not a prime number`)
// }
// else (a>2){
//   console.log(${a} is the prime number)
// }


//         //Largest Among three Number

// let a = prompt("Enter The Ist Number" );
// let b = prompt("Enter The 2nd Number" );
// let c = prompt("Enter The 3rd Number" );
// let x = Math.max(a,b,c)
// console.log(`${a},${b},${c} : is larget ${x}`);

//      //Largest Among Three number Withiut using Math.max

// function check(p,q,r){
//     if(p>=q && p>=r){
//     return p;
//     }
//     else if (q>=p && q>=r){
//         return q;
//     }
//     else{
//         return r;
//     }
// }
// let a = prompt("Enter The Ist Number" );
// let b = prompt("Enter The 2nd Number" );
// let c = prompt("Enter The 3rd Number" );
// let x = check(a,b,c)
// console.log(`${a},${b},${c} : is larget = ${x}`);

          // Print the table of a Number 

// function table(number){
//   let result = 1;
//   for(let i=1; i<=10; i++){
//      result = i*number;
//     console.log(result);
//   }
// }
// table(5);     
