function reverseWord(str) {
  str = str.trim().split("").reverse().join("");
  return str;
}

console.log(reverseWord("Javascript"));
