class Person { // this is the parent class
    constructor(){
        this.firstname =  'kalyani';
        this.lastname = 'challapalli';
        this.age = 37

    }    
    
    greet(){
        
        console.log(`Hello ${this.firstname} ${this.lastname}`)

    }

}

//inhirti the parent class

class Student extends Person{

}

let Student1 = new Student();
Student1.greet()