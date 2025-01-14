let a = [1,2,3,4,5,6,7]
let sumOfSquareOfOddNumbers = a.filter(v=>v%2!=0).map(v=>v*v).reduce((a,b)=>a+b)//[1,9,25,49]

console.log(sumOfSquareOfOddNumbers)
/*let a = [1,2,3,4,5,6,7]
let sumOfSquareOfOddNumbers = a.filter(v=>{
    if(v%2!=0){
        console.log(v)
        return true
    }else{
        return false
    
    }
})
.map(v=>{
    console.log(v*v)
  return v*v
})
.reduce((a,b)=>{
    console.log(a+b)
    return a+b
})//[1,9,25,49]

console.log(sumOfSquareOfOddNumbers)
*/
