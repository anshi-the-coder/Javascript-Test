let numbers = [1,2,3,4,5,6,7,8,9,10]
for(let i=0;i<=numbers.length;i++)
console.log(i)

//sum of natural numbers
function sumOfNaturalNumber(n){
  let sum=0
  for(let i=0;i<=n;i++){
  sum= sum+i 
}
return sum
}
console.log("Sum "+sumOfNaturalNumber(10))

//print element of an array ["Apple","Banana","Cherry"]

let fruits = ["Apple","Banana","Cherry"]
fruits.forEach((fruits)=>{
})
console.log(fruits)

// filter even number from an array

let arr = [3,2,4,7,6,5]
let a= arr.filter((value)=>{
  return value%2==0
})
console.log(a)