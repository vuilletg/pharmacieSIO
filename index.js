const defaultRoute = require("./routes/clients")
const errorRoute = require("./controler/errors")
const express = require("express")
let app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.listen(3000, () => console.log("server démmaré sur le port 3000"));
app.use("/client", defaultRoute)
app.get("*", errorRoute.Error)
