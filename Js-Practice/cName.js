function cName(names) {
  return names.map((name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  });
}

console.log(cName(["alice", "bob", "charlie"]));
