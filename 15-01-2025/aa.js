// let str=[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
// let a = str.filter((person)=>{
//     return person.age>25
// })
// console.log(a)


// let str =[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
// str.forEach((value)=>{
//     value.name= value.name.toUpperCase()
// })
// console.log(str)

let obj={
    person: { name: 'Alice', age: 25 },
    job: { title: 'Engineer', years: 5 }
}
for(let key in obj){
    console.log(` ${key}: ${obj[key]}`)
}