//Map an array to its squares
let ar=[1,2,3,4,5]
let a= ar.map((value)=>{
  return value*value
})
console.log(a)

// reduce an array to its sum
let a1 = [1,2,3,4,5]
let arr = a.reduce((h1,h2)=>{
  return h1+h2
})
console.log(arr)

// print multiplication table

printTable=((num)=>{
  for(let i =0;i<=10;i++){
    console.log(`${num}*${i}= ${num*i}`)
  }
})
printTable(4)