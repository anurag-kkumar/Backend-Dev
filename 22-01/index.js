const fs = require("fs");
const path = require("path");

const inputPath = path.resolve(__dirname, "inputs.txt");
const outputPath = path.resolve(__dirname, "output.txt");

const readStream = fs.createReadStream(inputPath, "utf-8");
const writeStream = fs.createWriteStream(outputPath);

// readStream.on("data", (chunk) => {
//     console.log("Data is reading in chunks",chunk);
   
// });

const  file=fs.readFileSync("input.txt","");
console.log(file);