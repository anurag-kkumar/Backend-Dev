const os = require("os");
const fs = require("fs");

setInterval(() => {
    const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(2);
    const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(2);
    const timestamp = new Date().toISOString();

    const log = `Time: ${timestamp}
Total Memory: ${totalMemory} GB
Free Memory: ${freeMemory} GB
`;

    fs.appendFile("./system_info.txt", log, (err) => {
        if (err) {
            console.error("Error writing file:", err);
        }
    });

}, 5000); 
