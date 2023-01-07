const { v4: uuid } = require("uuid");
const { format } = require("date-fns");
const path = require("path");
const fs = require("fs");


const createLogItem = (msg) => {
    const dateTime = `${format(new Date(), "yyyyMMdd\tHH:mm:ss")}`;
    return `${uuid()}\t${dateTime}}\t${msg}\n`;
}


const saveLogItem = (logItem) => {
  if(!fs.existsSync(path.join(__dirname, 'logs'))){
    fs.mkdir(path.join(__dirname, 'logs'), (err) => console.log(err))
  }
  fs.appendFile(path.join(__dirname, "logs", "events-log.txt"), logItem,(err) => console.log(err));
  console.log(logItem);
};


const log = (msg) => saveLogItem(createLogItem(msg))

module.exports = {log}
