let input=['h','e','l','l','o']
let n = input.length
for(let i = 0;i<parseInt(n/2);i++){
    //swapping
    let temp=input[i]
    //0 n-1-0  1 n-1-1 2 n-1-2
    input[i]=input[n-1-i] 
    input[n-1-i]=temp
}
console.log(input)