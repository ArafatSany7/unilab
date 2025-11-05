function hideVowel(str) {
  str = str.toUpperCase();
  res = str.replace(/[AEIOU]/g, "*");

  return res;
}

console.log(hideVowel("Javascripts"));
