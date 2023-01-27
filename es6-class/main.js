class Main{
    constructor(){
        this.name="Kaliraj Subbaiyakani";
    }
    getData(){
        console.log("'name'-",this.name);
    }
}
const obj = new Main();
obj.getData();                  //returns  'name'- Kaliraj Subbaiyakani

class Child extends Main{
    getName(){
        super.getData();
    }
}
const obj1 =new Child();
obj1.getName();                  //returns  'name'- Kaliraj Subbaiyakani