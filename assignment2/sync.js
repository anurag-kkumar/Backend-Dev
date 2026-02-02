const fs = require("fs");
const path = require("path");

const [,, srcDir, destDir] = process.argv;

if (!srcDir || !destDir) {
  console.log("Usage: node sync.js <source> <destination>");
  process.exit(1);
}

fs.readdir(srcDir, (err, files) => {
  if (err) return console.error("Source directory error");

  if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir);
  }

  files.forEach(file => {
    const srcPath = path.join(srcDir, file);
    const destPath = path.join(destDir, file);

    fs.copyFile(srcPath, destPath, err => {
      if (err) {
        console.error("Error copying:", file);
      } else {
        console.log("Synced:", file);
      }
    });
  });
});

