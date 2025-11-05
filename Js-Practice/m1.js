function cleanAndReplace(str1) {
  str1 = str1.trim().replace(/\s+/g, " ").toLowerCase();
  str1 = str1.replaceAll(" ", "-");
  return str1;
}

console.log(cleanAndReplace(" java script   Language "));
