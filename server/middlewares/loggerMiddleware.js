const fs = require("fs");

const logger = (req, res, next) => {
  let now = new Date();
  let hour = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();
  let data = `${hour}:${minutes}:${seconds} ${req.method} ${req.url} ( ${req.get(
    "user-agent"
  )} )`;
  console.log(data);
  fs.appendFile("server.log", data + "\n",  (err) => {
    if (err) {
      console.log(err);
      fs.appendFile("serverErrors.log", err.message + "\n")
    }
    else {
      
      console.log("Log added")
    }
       
    
  });
  next();
};
module.exports = logger;
