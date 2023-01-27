//  Promise

function main(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success");
            // reject("error");
        },3000);
    });
}
console.log(main());

// main()
//     .then(function(result){
//         console.log(result);
//     }).catch(function(err){
//         console.log(err);
//     });

//  Promise Chaining

function main1(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success1");
            // reject("error1");
        },3000);
    });
}

function main2(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success2");
            // reject("error2");
        },3000);
    });
}

function main3(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            resolve("success3");
            // reject("error3");
        },3000);
    });
}

// main1()
//     .then(function(res){
//         console.log(res);
//         main2()
//             .then(function(res){
//                 console.log(res);
//                 main3()
//                     .then(function(res){
//                         console.log(res);
//                     }).catch(function(err){
//                         console.log(err);
//                     })
//             }).catch(function(err){
//                 console.log(err);
//             })
//     }).catch(function(err){
//         console.log(err);
//     })

    //  Promise all

    Promise.all([main(),main1(),main2(),main3()])
        .then(function(res){
            console.log(res);
        }).catch(function(err){
            console.log(err);
        })