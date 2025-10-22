function lin(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    }
  }
  return -1;
}

let number = [34, 45, 65, 33, 60, 71];
let target = 33;

let result = lin(number, target);

if (result != -1) {
  console.log(`Element found at index numner : ${result}`);
} else {
  console.log("elemetnt not found");
}
