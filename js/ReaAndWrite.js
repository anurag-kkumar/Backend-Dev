const fs = require("fs");

fs.appendFileSync("./test.txt", "\nThis is appended text");

fs.readFile("./test.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});

