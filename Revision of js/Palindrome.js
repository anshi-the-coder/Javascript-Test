let a=['n','a','m','a','n']
let n=a.length
isPalindrome=true
for(let i=0;i<parseInt(n/2);i++){
    if(a[i]!=a[n-1-i]){
        isPalindrome=false
        break
    }
}
console.log(isPalindrome)