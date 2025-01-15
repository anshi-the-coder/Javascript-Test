let a= [1, 2, 3, 4, 5, 6]
let arr=a.filter(v=>v%2==0).map(v=>v*v).reduce((a,b)=>a+b)
console.log(arr)