//count vowels in a String
let vowels=['a','e','i','o','u']
let word = "aerroplane"
let count=0
for(let i=0;i<word.length;i++){
  if(!vowels.includes(word[i])){
    count++
  }
}
console.log(count)

//Reverse a String
//               01234
const string = "hello"
let reverseString=(str)=>{
  let newString= ""
 for(let i=string.length-1;i>=0;i--){
   newString=newString+str[i]
 } 
 return newString
}

let newString=reverseString(string) 
console.log(newString)