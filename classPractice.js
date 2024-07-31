// Let's Practice 

/*Qs. You are creating a website for your college. Create a class user with 2 properties, name & email. 
It also has a method called viewData( ) that allows user to view website data.
*/
let DATA = "secret information";

class User{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewDetail(){
        console.log(`Website data is ${DATA}`);
    }
}


let student = new User("Amisha", "amisha@gmail.com");
let teacher = new User("Tyler", "tyler@gmail.com");

/*
Qs. Create a new class called Admin which inherits from user. Add a new method called editData to Admin that allows it to edit website data. 
*/

class Admin extends User{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        DATA = "updated to a new data"
    }
}

let adminUser = new Admin("Admin", "admin@gmail.com");
