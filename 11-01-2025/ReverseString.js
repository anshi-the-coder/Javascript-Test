let str=['a','n','s','h','i','k','a']
let n=str.length
for(let i=0;i<parseInt(n/2);i++){
    let temp=str[i]
    str[i]=str[n-1-i]
    str[n-1-i]=temp
}
console.log(str)