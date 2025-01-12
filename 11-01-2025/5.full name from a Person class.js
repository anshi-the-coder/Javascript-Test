class Person{
    constructor(name,surname){
        this.name=name       // Properties
        this.surname=surname
    }
    printFullName(){         // function
        console.log(`The full name is:${this.name+" "+ this.surname}`)
    }
}

let temp = new Person("john","Doe")
temp.printFullName()