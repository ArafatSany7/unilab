function vCounter(str) {
  let count = 0;
  const vowel = "aeiouAEIOU";
  for (let ch of str) {
    if (vowel.includes(ch)) {
      count += 1;
    }
  }

  return count;
}

console.log(vCounter("javaLearn"));
