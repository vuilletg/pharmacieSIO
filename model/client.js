const client = require("./bdd")
const {query} = require("express");

function getClient(criter = false) {

    if (!criter) {
        client.query("SELECT * FROM client where nom =?",[criter],(err, result) => {
            if (!err){
                return result
            }else {
                throw new Error("requette impossible" + err)
            }
        })
    } else {
        client.query("SELECT * FROM client", (err, result) => {
            if (!err){
                return result
            }else {
                throw new Error("requette impossible")
            }
        })
    }


}
function addClient(client) {

        let req = "insert into client (secu, nom, prenom, mutuelle, date_naissance) values "
        client.query(req+"("+client.secu+","+client.nom+","+client.prenom+","+client.mutuelle+","+client.D_N+")", (err, result) => {
            if (!err){
                return result
            }else {
                throw new Error("requette impossible")
            }
        })



}
module.exports = {getClient, addClient}
