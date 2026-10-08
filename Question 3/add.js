const fs = require("fs");
const path = require("path");

const logsPath = path.join(process.cwd(), "Logs");

// Create the Logs directory if it does not exist
if (!fs.existsSync(logsPath)) {
    fs.mkdirSync(logsPath);
}

// Change the current directory to Logs
process.chdir(logsPath);

// Create 10 log files
for (let number = 0; number < 10; number++) {
    const fileName = `log${number}.txt`;

    fs.writeFileSync(fileName, `This is the content of ${fileName}`);

    console.log(fileName);
}