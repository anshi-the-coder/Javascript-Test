let str= ['apple', 'banana', 'apple', 'orange', 'banana', 'apple']
let a= str.reduce((map,fruit)=>{
    map[fruit]=(map[fruit]||0)+1 
    return  map     
},{}) 
    console.log(a)




//Output: {apple: 3, banana: 2, orange: 1} (Use reduce to count occurrences of each word)