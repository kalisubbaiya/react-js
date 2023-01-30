console.log(this);

let student={
    name:"kaliraj",
    age:26,
    hello(){
        let stName= "my name is " + this.name;
        console.log(stName);
    }
};
student.hello();