function modifyArray(nums) {
    return nums.map(num => (num % 2 === 0 ? num * 2 : num * 3));
} 



function main() {
    const n = +(readLine());
    const a = readLine().split(' ').map(Number);
    
    console.log(modifyArray(a).toString().split(',').join(' '));
}