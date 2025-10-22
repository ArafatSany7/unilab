// linear
function lin(arr, target) {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    if (arr[i].toLowerCase() == target.toLowerCase()) {
      return i;
    }
  }
  return -1;
}

// babul shoot

function babul(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j].toLowerCase() > arr[j + 1].toLowerCase) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let name = ["Jodu", "Kodu", "Modu", "karim", "Rahim"];
console.log("Original array : ", name);

// lin
target = "modu";
let result = lin(name, target);

if (result != -1) {
  console.log(`"${target}" found at index number ${result}`);
} else {
  console.log("nai");
}

// babul

let sortName = babul([...name]);
console.log("Sorted array : ", sortName);
