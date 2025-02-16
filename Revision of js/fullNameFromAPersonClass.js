class Person {
    constructor(name,surname){
        this.name=name
        this.surname=surname
    }
    printFullName(){
        console.log(`The full name is : ${this.name+ " " +this.surname}`)
    }
}
let temp= new Person("Anshika","Gangwar")
temp.printFullName()