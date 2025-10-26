const fs = require("fs");

const data = fs.readFileSync(0, "utf8").trim();
if (!data) process.exit(0);

const w = parseInt(data.split(/\s+/)[0], 10);

if (w % 2 === 0 && w > 2) {
  console.log("YES");
} else {
  console.log("NO");
}
