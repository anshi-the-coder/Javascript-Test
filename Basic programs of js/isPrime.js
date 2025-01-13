// prime number- 2,3,5,7,11,13,17

let isPrime=((num)=>{
    for(let i=2;i<num;i++){
       if(num%i==0){
          return false
       } 
    }
    return true
})
let prime= isPrime(16)
console.log(prime)