let str=[{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
let a = str.filter((person)=>{
    return person.age>25
})
console.log(a)


//Output: [{name: 'Bob', age: 30}] (Filter objects where age is greater than 25)