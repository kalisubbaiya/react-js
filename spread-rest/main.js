//spread operator

const arr1 = ["kali","raj","subbaiya"];
const arr2 = ["hi","hello","how are you"];
const arrCombined = [...arr1, ...arr2];

 // es6 rest operator
    function fun(...input){
        let sum = 0;
        for(let i of input){
            sum+=i;
        }
        return sum;
    }
    console.log(fun(1,2)); 
    console.log(fun(1,2,3)); 
    console.log(fun(1,2,3,4,5));