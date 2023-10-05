const fs = require('fs');
const path = require('path');

function removeLogFiles() {
  const logsDir = path.join(__dirname, 'Logs');

  // Check if the Logs directory exists
  if (fs.existsSync(logsDir)) {
    const filesToDelete = fs.readdirSync(logsDir);
    
    //file names to delete
    console.log('Files to delete:');
    filesToDelete.forEach(file => {
      console.log(file);
      fs.unlinkSync(path.join(logsDir, file));
    });

    // Remove the Logs directory
    fs.rmdirSync(logsDir);
    console.log('Logs directory removed.');
  } else {
    console.log('Logs directory does not exist.');
  }
}

removeLogFiles();