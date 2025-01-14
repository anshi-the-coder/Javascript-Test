let a = ['apple','banana','apple','orange','banana','apple']
let fruitCount= a.reduce((map,fruit)=>{
    map[fruit]=(map[fruit]||0)+1 
    return  map     
},{}) 
//arr.reduce(  (firstPara,secondpar)=>{} , {})
//the second parameter in the reduce function is the starting value of the
//first parameter in the arrow function and the second parameter of the
//arrow function is the value of array. 
console.log(fruitCount) 
let str="123456"
console.log(str.split("").reverse().join(""))


