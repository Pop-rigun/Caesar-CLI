const fs = require("fs");

module.exports = inputStream = input => {
  if (input) {
    
    if (fs.existsSync(input)) {
      
      return fs.createReadStream(input); } 
      else {console.error("Файл чтения не существует");
      process.exit(3);
    }
  }
  return process.stdin;
}