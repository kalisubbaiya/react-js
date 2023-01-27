// Callback

function sum(num1,num2,Callback){
   var result=num1+num2;
   Callback(result);
}
function res(e){
   console.log("RESULT=" +e);
}
sum(10,20,res);

// Callback hell

function multiply(num1,num2){
   return num1*num2;
}
function compute(Callback,num1,num2){
   return Callback(num1,num2);
}
console.log(compute(multiply,10,20));