//Given an array of lowercase letters sorted in ascending order, find the smallest letter in the given array greater than a given ‘key’.

// Assume the given array is a circular list, which means that the last letter is assumed to be connected with the first letter. This also means that the smallest letter in the given array is greater than the last letter of the array and is also the first letter of the array.

// Write a function to return the next letter of the given ‘key’.

function nextGreatest(arr, key) {
  let start = 0
  let end = arr.length - 1

  if (key < arr[0] || key > arr[end]) {
    return arr[0]
  }

  while (start <= end) {
    let mid = Math.floor(start + (end - start) / 2)

    if (key < arr[end]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return arr[start % arr.length]
}

//Given an array of numbers sorted in ascending order, find the range of a given number ‘key’. The range of the ‘key’ will be the first and last position of the ‘key’ in the array.

// Write a function to return the range of the ‘key’. If the ‘key’ is not present return [-1, -1].

//best used for array, LL, matrix
//need to look for specific element

//two pointer, from opp ends
//while loop
//find mid
//move mid accordingly

function findRange(arr, key) {
  let result = [-1, -1]
  result[0] = binarySearch(arr, key, false)
  if (result[0] !== -1) {
    result[1] = binarySearch(arr, key, true)
  }
}

function binarySearch(arr, key, findMaxIndex) {
  let keyIndex = -1
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor(start + (end-start) / 2)

    if (key < arr[mid]) {
      end = mid - 1
    } else if (key > arr[mid]) {
      start = mid + 1
    } else {
      keyIndex = mid
      if (findMaxIndex) {
        start = mid + 1
      } else {
        end = mid - 1
      }
    }
  }
  return keyIndex
}

// find lowest key in array with duplicates

function findLow(arr, key) {
  let start = 0
  let end = 0

  while (start <= end) {
    let mid = Math.floor(start + (end-start) / 2)

    if (arr[mid] < key) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  if (start < arr.length && arr[low] === key) return low
  return -1
}

// find highest key in array with duplicates

function findHigh(arr, key) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor(start + (end-start) / 2)

    if (arr[mid] <= key) {
      start = mid + 1
    } else {
      end = mid - 1
    }
  }
  if (high < arr.length && arr[high] === key) return high
  return -1
}


function searchRotatedArray(arr, key) {
  return binarySearch(arr, 0, arr.length - 1, key)
}

function binarySearch(arr, start, end, key) {
  if (start > end) return -1

  let mid = Math.floor(start + (end - start) / 2)

  if (arr[mid] === key) return mid

  if (arr[start] <= arr[mid] && key >= arr[start] && key <= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key)
  }
  else if (arr[end] >= arr[mid] && key >= arr[mid] && key <= arr[end]) {
    return binarySearch(arr, end, mid + 1, key)
  }
  else if (arr[end] <= arr[mid]) {
    return binarySearch(arr, end, mid + 1, key)
  }
  else if (arr[start] >= arr[mid]) {
    return binarySearch(arr, start, mid - 1, key)
  }
  return -1
}
