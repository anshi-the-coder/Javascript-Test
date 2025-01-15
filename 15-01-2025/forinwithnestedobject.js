let input = {
    person: { name: 'Alice', age: 25 },
    job: { title: 'Engineer', years: 5 }
}
for(let key in input){
    console.log(`${key}: ${input[key]}`)
}
// Output (console logs):
// person: [object Object]
// job: [object Object]
