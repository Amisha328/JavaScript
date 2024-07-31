// JavaScript object is an entity hacing state and behaviour
// JS object have a special property called prototype

const student = {
    fullname: "Allen Walker",
    marks: 90.9,
    printDetails: function(){
        console.log(`Name is ${this.fullname} and marks is ${this.marks}`);
    }
};

const employee = {
    calcTax() {
        console.log("Calculate tax of 10%");
    }
}

const employee1 = {
    salary: 50000,
};

const employee2 = {
    salary: 50000,
    calcTax(){
        console.log("Calculate tax of 20%");
    }
};

// If object & prototype have same method, object's method will be used
employee1.__proto__ = employee;
employee2.__proto__ = employee;
