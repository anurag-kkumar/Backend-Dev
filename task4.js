const fs = require("fs");

//copy file (async) 
fs.copyFile("source.txt", "copy_async.txt", (err) => {
  if (err) {
    console.error("Async copy failed:", err);
    return;
  }
  console.log("Async copy completed");

  // delete file (async) 
  fs.unlink("copy_async.txt", (err) => {
    if (err) {
      console.error("Delete failed:", err);
      return;
    }
    console.log("Async copied file deleted");
  });
});

//  copy file  (sync) 
try {
  fs.copyFileSync("source.txt", "copy_sync.txt");
  console.log("Sync copy completed");
} catch (err) {
  console.error("Sync copy failed:", err);
}

//  CREATE DIRECTORY 
fs.mkdir("newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory created");
});

//  CREATE NESTED DIRECTORIES 
fs.mkdir("folder/folder1/folder2", { recursive: true }, (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Nested directories created");
});

//  REMOVE DIRECTORY  
// fs.rmdir works ONLY if directory is empty
fs.rmdir("newDirectory", (err) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log("Directory removed using rmdir");
});

//   REMOVE DIRECTORY 
 fs.rm("copy_sync.txt", (err) => {
   if (err) {
     console.error(err);
     return;
   }
   console.log("File removed using rm");
 });

