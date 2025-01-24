function getMaxLessThanK(n, k) {
    let maxVal = 0;
    for (let a = 1; a < n; a++) {
        for (let b = a + 1; b <= n; b++) {
            let andValue = a & b;
            if (andValue < k && andValue > maxVal) {
                maxVal = andValue;
            }
        }
    }
    return maxVal;
}

function main() {
    const q = +(readLine());
    
    for (let i = 0; i < q; i++) {
        const [n, k] = readLine().split(' ').map(Number);
        
        console.log(getMaxLessThanK(n, k));
    }
}