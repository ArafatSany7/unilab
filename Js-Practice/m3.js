function extractAndCombine(str1, str2) {
  str1 = str1.slice(0, 3).toUpperCase();
  str2 = str2.slice(0, 3).toUpperCase();

  return str1 + "#" + str2;
}

console.log(extractAndCombine("arafat", "dhaka"));
