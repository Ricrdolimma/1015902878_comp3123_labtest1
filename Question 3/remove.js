const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

// Check whether the Logs directory exists
if (fs.existsSync(logsPath)) {
    const files = fs.readdirSync(logsPath);

    // Go through and delete each file
    files.forEach(fileName => {
        console.log(`delete files...${fileName}`);

        const filePath = path.join(logsPath, fileName);
        fs.unlinkSync(filePath);
    });

    fs.rmdirSync(logsPath);
} else {
    console.log("Logs directory does not exist.");
}