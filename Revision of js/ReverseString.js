let a=['h','e','l','l','o']
let n= a.length
for(let i=0;i<parseInt(n/2);i++){
    let temp=a[i]
    a[i]=a[n-1-i]
    a[n-1-i]=temp
}
console.log(a)