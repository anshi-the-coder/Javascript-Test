class Person{
    constructor({name,surname,subject}){
        this.name=name
        this.surname=surname 
        this.subject=subject 
}
printPersonDetails(){ 
console.log(`The name of the person is ${this.name} and surname is ${this.surname} and subject is ${this.subject}`)
}  
}
class Student extends Person {
    constructor(params){
        super(params)
        this.doing= params.doing
    }
    doingStudy(){
        console.log(`This student doing ${this.doing}`)
    }
}
let obj={
    name:"Jane",
    surname:"Doe",
    doing:"studying",
    subject:"math"

}
let Student1=new Student(obj)
Student1.printPersonDetails()
Student1.doingStudy()
    