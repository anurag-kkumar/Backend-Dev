const fs = require("fs");
const path = require("path");
const { Transform } = require("stream");

const inputPath = path.resolve(__dirname, "inputs.txt");
const outputPath = path.resolve(__dirname, "output.txt");

const readStream = fs.createReadStream(inputPath, "utf-8");
const writeStream = fs.createWriteStream(outputPath, "utf-8");

const upperCaseTransform = new Transform({
  transform(chunk, encoding, callback) {
    const transformedData = chunk.toString().toUpperCase();
    callback(null, transformedData);
  }
});

// Proper piping
readStream.pipe(upperCaseTransform).pipe(writeStream);

writeStream.on("finish", () => {
  console.log("Write stream finished ");
});
