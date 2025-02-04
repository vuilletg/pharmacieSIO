const iniParser = require("iniparser")
const db = require("mysql2/promise")
let configDB = iniParser.parseSync("./DB.ini")
const connection = db.createConnection({
    host: configDB["dev"]["host"],
    user: configDB["dev"]["user"],
    password: configDB["dev"]["password"],
    database: configDB["dev"]["database"],
    port: configDB["dev"]["port"]
});


module.exports = connection;
