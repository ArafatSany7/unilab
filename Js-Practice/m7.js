function reverseAndMarge(str1, str2) {
  str1 = str1.trim().split("").reverse().join("").toLowerCase();
  str2 = str2.trim().split("").reverse().join("").toLowerCase();

  return str1 + "$" + str2;
}

console.log(reverseAndMarge("Hello", " World"));
