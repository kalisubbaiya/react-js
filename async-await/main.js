async function myDisplay() {
    let myPromise = new Promise(function(resolve, reject) {
        resolve("I love You !!");
        reject("I hate you!!");
    });
    document.getElementById("demo").innerHTML = await myPromise;
}
    
myDisplay();