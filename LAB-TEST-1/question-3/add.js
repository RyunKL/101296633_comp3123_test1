const fs = require('fs');
const path = require('path');

function createLogFiles() {
  const logsDir = path.join(__dirname, 'Logs');

  // Create the Logs directory if it doesn't exist
  if (!fs.existsSync(logsDir)) {
    fs.mkdirSync(logsDir);
    console.log('Logs directory created.');
  }

  // Change the current working directory to Logs
  process.chdir(logsDir);

  // Create 10 log files and write some text
  for (let i = 1; i <= 10; i++) {
    const fileName = `log${i}.txt`;
    const filePath = path.join(logsDir, fileName);
    const logText = `This is log file ${i}.`;
    
    fs.writeFileSync(filePath, logText);
    console.log(`Created file: ${fileName}`);
  }
}

createLogFiles();