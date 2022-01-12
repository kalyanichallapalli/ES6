//The constructor method is a special method of a class for creating and initializing an object 
//instance of that class.
class PersonCl
{
    constructor(firstName,birthYear)
    {
        this.firstName=firstName;
        this.birthYear=birthYear;
    }
    calcAge()
    {
        console.log(2037-this.birthYear);
    }
    greet()
    {
        console.log(`hai ${this.firstName}`);
    } 
}

const jessica = new PersonCl('jessica', 1990);
console.log(jessica);
jessica.calcAge();
jessica.greet();
