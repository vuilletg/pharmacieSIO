let db = require("mysql2")
let iniParser = require("iniparser")
let configDB = iniParser.parseSync("./DB.ini")
const express = require("express")
let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
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
app.listen(3000, () => console.log("server démmaré sur le port 3000"));

app.get("/", (req, res) => {
    res.send("le serveur marche")
})
