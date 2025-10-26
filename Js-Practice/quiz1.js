// let nums = [1, 2, 5, 6];
// let target = 5;
// let result = lin(nums, target);

function lin(arr, target) {
  var size = arr.length;

  for (let i = 0; i < size; i++) {
    if (arr[i] == target) {
      return i;
    }
    if (arr[i] > target) {
      return i;
    }
  }
  return size;
}

console.log(lin([1, 3, 5, 6], 5));
console.log(lin([1, 3, 5, 6], 2));
console.log(lin([1, 3, 5, 6], 7));
