var bd = require("mysql2")
const iniParser = require("iniparser")
const db = require("mysql2")
let configDB = iniParser.parseSync("./DB.ini")
let clientDB = db.createConnection({
    host: configDB["dev"]["host"],
    user: configDB["dev"]["user"],
    password: configDB["dev"]["password"],
    database: configDB["dev"]["database"],
    port: configDB["dev"]["port"]
})
clientDB.connect( (err) =>{
    if (err) console.log("imposible de se connecter à la base " + configDB["dev"]["database"] + " \n Erreur:" + JSON.stringify(err))
    else console.log("connection à la base " + configDB["dev"]["database"] + " réussi sur le port " + configDB["dev"]["port"])
});
module.exports = clientDB;
