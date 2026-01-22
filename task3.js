// FileSystem.copyfile
// FileSystem.copyfilesync
// false.unlink
const fs = require("fs");

// Copy file (Async)
fs.copyFile("source.txt", "copy_async.txt", (err) => {
  if (err) {
    console.error("Async copy failed:", err);
    return;
  }
  console.log("Async copy completed");

  //  Delete file
  fs.unlink("copy_async.txt", (err) => {
    if (err) {
      console.error("Delete failed:", err);
      return;
    }
    console.log("Async copied file deleted");
  });
});
//Copy file (Sync)
try {
  fs.copyFileSync("source.txt", "copy_sync.txt");
  console.log("Sync copy completed");
} catch (err) {
  console.error("Sync copy failed:", err);
}

