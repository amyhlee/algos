function maxSubArraySum(arr, n) {
  let max = -Infinity

  if (num > arr.length) {
    return null
  }

  for (let i = 0; i < arr.length - n + 1; i++) {
    let tempSum = 0
    for (let j = 1; j < numbers; j++) {
      tempSum += arr[i + j]
    }
    max = Math.max(tempSum, max)
  }
  return max
}

