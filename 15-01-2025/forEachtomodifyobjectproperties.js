let str= [{name: 'Alice', age: 25}, {name: 'Bob', age: 30}]
str.forEach(value=>{
value.name= value.name.toUpperCase()
})
console.log(str)

//Output: [{name: 'ALICE', age: 25}, {name: 'BOB', age: 30}]
//  (Use forEach to capitalize the name property)