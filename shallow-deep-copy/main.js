// Shallow copy

let array=[10, 20, 30, 40];
let array1=array;

array1[0]=50;

console.log(array);
console.log(array1);

// Deep copy 

// method.1

var stud={
    name:'xyz',
    age:25,
    mark: {
        m1: 90,
        m2: 80
    }
};

var stud2=Object.assign({},stud);   // assaign method
stud2.age=60;
console.log(stud);
console.log(stud2);

// method.2

let arr=[5, 6, 7, 8, 9];
let arr1=[...arr];                  // spread method

arr1[3]=10;
console.log(arr);
console.log(arr1);

// method.3

let arr2=[1,2,3,4,9,10];
let arr3= JSON.parse(JSON.stringify(arr2)); //  Json method
arr3[2]=20;
console.log(arr2);
console.log(arr3);
