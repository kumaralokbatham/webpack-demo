// Factorial by recursion method]
let number = prompt("Enter The Number");
let fact= 1;
function factorial(n){
  if(n>number){
    return;
  }
  fact= fact*n;
  n++
  factorial(n)
}
factorial(1);
console.log(`The Factorial of ${number} is ${fact}`);
