var obj={
    name:"kaliraj"
}

var obj1={
    normalFun(){
        console.log(this.name);
        var arrowFun= ()=>{
            console.log(this);
        };
        arrowFun();
    }
};
obj1.normalFun.call(obj);