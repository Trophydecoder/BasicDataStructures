

function maxSubarraySum(arr, k) {
 
    let n = arr.length;
    if (n < k) return null; // if window is bigger than array, it's invalid

    // Step 1: Calculate sum of the first 'k' elements
    let windowSum = 0;
    for (let i = 0; i < k; i++) {
        windowSum += arr[i];
    }

    // maxSum starts as the sum of the first window
    let maxSum = windowSum;

    // Step 2: Slide the window across the array
    for (let i = k; i < n; i++) {
        // subtract element leaving window, add element entering window
        windowSum += arr[i] - arr[i - k];

        // update maxSum if this window is larger
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}

// Example usage:
const arr = [2, 1, 5, 1, 3, 2];
const k = 3;   // this comes from the problem statement
console.log(maxSubarraySum(arr, k));  // Output: 9
