var obj={name:'React'};

function main(a, b, c){
   console.log(this, a, b, c);
};

main.call(obj, 3, 4, 5);
main.apply(obj, [1,2,3]);

var main1=main.bind(obj, 1, 2, 3);
main1();
console.log(obj);