function peli(str) {
  str = str.toLowerCase().replace(/\s+/g, "");
  let rev = str.split("").reverse().join("");

  return rev === str;
}

console.log(peli("Rafcecar"));
