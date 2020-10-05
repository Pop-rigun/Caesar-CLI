const fs = require("fs");

module.exports = outputStream = output => {
  if (output) {

    if (fs.existsSync(output)) {
      return fs.createWriteStream(output, { flags: 'a+' });
    }
    
    else {
      console.error("Файл записи не найден");
      process.exit(1);
    }
  }
  return process.stdout;
}