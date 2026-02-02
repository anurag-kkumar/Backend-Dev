const fs = require("fs");
const readline = require("readline");

const logFile = process.argv[2];
let errorCount = 0;
let totalLines = 0;

const rl = readline.createInterface({
  input: fs.createReadStream(logFile),
  crlfDelay: Infinity
});

rl.on("line", line => {
  totalLines++;
  if (line.toLowerCase().includes("error")) {
    errorCount++;
  }
});

rl.on("close", () => {
  console.log("Log Summary Report");
  console.log("------------------");
  console.log("Total Lines:", totalLines);
  console.log("Error Count:", errorCount);
});
