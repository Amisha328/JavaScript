/*
class Toyota{
    constructor(brand){
        console.log("Creating Object")
        this.brand = brand;
    }
    start(){
        console.log("Car started");
    }
    stop(){
        console.log("Car stopped");
    }
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let fortuner = new Toyota("Fortuner");
// fortuner.setBrand("Fortuner");

*/

// Inheritance in class

class Person{
    constructor(name){
        this.species = "homo sapiens"
        this.name = name;
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep")
    }
}

class Engineer extends Person{
    constructor(name, branch){
        super(name);
        this.branch = branch;
    }
    work(){
        super.eat();
        console.log("Working on a project");
    }
}

let amishaObj = new Engineer("Amisha", "CSE");


