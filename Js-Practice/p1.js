const arr = [5, 3, 7, 1, 9, 6];

function babul(arr) {
  var size = arr.length;
  for (let i = 0; i < size - 1; i++) {
    for (let j = 0; j < size - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
const sArr = babul(arr);

function lin(sArr, target) {
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == target) {
      return i;
    } else if (sArr[i] > target) {
      return i;
    }
  }
  return sArr.length;
}

console.log(lin(sArr, 5));
console.log(lin(sArr, 4));
console.log(lin(sArr, 11));
