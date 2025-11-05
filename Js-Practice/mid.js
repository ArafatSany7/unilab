function processAndConcate(str1, str2) {
  str1 = str1.trim();
  str2 = str2.trim();

  str1 = str1.toUpperCase();
  str2 = str2.toLowerCase();

  str1 = str1.replaceAll(" ", "_");
  str2 = str2.replaceAll(" ", "_");

  let result = str1 + "-" + str2;

  return result;
}

console.log(processAndConcate("Hello world", "Good Morning"));
