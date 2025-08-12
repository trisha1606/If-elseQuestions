function longestArithmeticSubarray(arr) {
    let n = arr.length;
    if (n < 2) return n;
    let maxLen = 2;
    let currLen = 2;
    let diff = arr[1] - arr[0];

    for (let i = 2; i < n; i++) {
        if (arr[i] - arr[i - 1] === diff) {
            currLen++;
        } else {
            diff = arr[i] - arr[i - 1];
            currLen = 2;
        }
        if (currLen > maxLen) {
            maxLen = currLen;
        }
    }
    return maxLen;
}
console.log(longestArithmeticSubarray([1, 3, 5, 7, 9])); 