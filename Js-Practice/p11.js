function maxNumber(numbers) {
  let max = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

console.log(maxNumber([23, 45, 643, 23]));
