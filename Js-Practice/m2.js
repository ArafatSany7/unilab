function swapJoin(str1, str2) {
  str1 = str1.trim().replace(/\s+/g, " ");
  str2 = str2.trim().replace(/\s+/g, " ");

  function swapCase(str) {
    let result = "";
    for (let ch of str) {
      if (ch === ch.toUpperCase()) {
        result += ch.toLowerCase();
      } else {
        result += ch.toUpperCase();
      }
    }
    return result;
  }

  str1 = swapCase(str1);
  str2 = swapCase(str2);

  str1 = str1.replaceAll(" ", "_");
  str2 = str2.replaceAll(" ", "_");

  return str1 + "@" + str2;
}

console.log(swapJoin("Hello World", "JAVASCRIPT CODE"));
