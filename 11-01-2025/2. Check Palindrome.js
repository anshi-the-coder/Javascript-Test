let input=['n','a','m','a','n','n','a','m','a','n','n','a']
let n = input.length
let isPalindrome= true
for(let i=0;i<parseInt(n/2);i++){
    if(input[i]!=input[n-1-i]){
        isPalindrome=false
        break
    }
}
console.log(isPalindrome)