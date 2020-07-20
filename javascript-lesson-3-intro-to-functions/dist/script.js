/*
 
exercise #1: variables and number data type

var num1 = 7;
var num2 = 3;
var sum = num1 + num2;
console.log(sum);

exercise #2 :function example #1

function sumNumbers(num1, num2){
  var sum = num1 + num2; 
  return sum;
 }  
 
var output = sumNumbers(76,49);
console.log(output);
*/
//exercise #3 : JavaScript arrow function

const sumNumbers = (num1,num2) => {return num1 + num2};
document.getElementById("addingNumbers").innerHTML =sumNumbers(2,5);