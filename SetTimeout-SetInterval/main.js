// setTimeout
setTimeout(function (){
    console.log("hi");
},3000);

// setInterval

const myInterval= setInterval(startTime,4000);

function startTime(){
    console.log("hello");
}

function stopInterval(){
    clearInterval(myInterval);
}