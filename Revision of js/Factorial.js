let factorial=(num)=>{
let fact=1
for(let i=1;i<=num;i++){
    fact=fact*i
}
return fact
}
let temp= factorial(5)
console.log(temp)