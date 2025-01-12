const max = (arr) => {
    let largest = 0
    
    for (let i = 1; i < arr.length; i++) {
        let element = arr[i]
        if (element > largest) {
            largest = element
        }
    }
    return largest
}
let large= max( [3, 7, 2, 9]) // 
console.log(large)