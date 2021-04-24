function binarySearch(array) {
  let left = 0, right = array.length - 1

  while(left <= right) {
    let mid = (left + right) >> 1
    if (array[mid] === target) {
      // find the target
      return
    } else if (array[mid] < target) {
      left = mid + 1
    } else {
      right = mid + 1
    }
  }
}