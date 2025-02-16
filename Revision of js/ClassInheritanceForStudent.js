class Person{
   constructor({name,surname,subject}){
       this.name=name
       this.surname=surname 
       this.subject=subject 
}
printPersonDetails(){
   console.log(`The name of the Person is ${this.name} and surname is ${this.surname} and subject is ${this.subject}`)
}
}
class Student extends Person{
   constructor(params){
      super(params)
      this.doing=params.doing
   }
doingStudy () {
   console.log(`This student doing ${this.doing}`)
}
}
let obj={
   name:"Anshika",
   surname:"Gangwar",
   doing:"Studying",
   subject:"math",
}
let student1=new Student(obj)
student1.printPersonDetails()
student1.doingStudy()