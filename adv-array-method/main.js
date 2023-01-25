//      map

var mapped=[1, 2, 3, 4, 5].map(function(value, index){
    return value * 3;
});
console.log("map", mapped);

//      filter

var filtered=[18, 42, 03,07, 45].filter(function(value, index){
    return value > 30;
});
console.log("filter", filtered);

//      every

var everyy=[18, 42, 03,07, 45].every(function(value, index){
    return value > 30;
});
console.log("every", everyy);

//      some

var somee=[18, 42, 03,07, 45].some(function(value, index){
    return value > 30;
});
console.log("some", somee);

//      find

var findd=[18, 42, 03,07, 45].find(function(value, index){
    return value > 30;
});
console.log("find", findd);

//      reduce

var reducee=[18, 42, 03,07, 45].reduce(function(pre, val){
    return pre + val;
},50);                                  //set initial value that could be add
console.log("reduce", reducee);

//      foreach

const array1 = ['a', 'b', 'c', 1, 2, 3];
array1.forEach(element => console.log(element));
  