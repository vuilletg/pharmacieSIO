const client = require("./bdd")

function getOrdonnance(critere = false) {

    if (!critere) {
        client.query("SELECT * FROM ordonnance where id = " + critere, (err, result) => {
            if (!err) {
                return result
            } else {
                throw new Error("requette impossible" + err)
            }
        })
    } else {
        client.query("SELECT * FROM ordonnance", (err, result) => {
            if (!err) {
                return result
            } else {
                throw new Error("requette impossible")
            }
        })
    }


}

function addOrdonnance(param) {

    let req = "insert into ordonnance (medicament, duree, debut, posologie, client) values (" + param.medicament + "," + param.duree + "," + param.debut +"," + param.posologie +",\"" + param.client + "\")"
    client.query(req, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

function delOrdonnance(id) {
    client.query("delete from ordonnance where id = " + id, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

function editOrdonnance(param) {

    let req = "update ordonnance set (medicament = " + param.medicament + ", duree = " + param.duree + ", debut = " + param.debut +", posologie = " + param.posologie +", client = \"" + param.client + "\") where id = " + param.id
    client.query(req, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

module.exports = {getOrdonnance, addOrdonnance, delOrdonnance, editOrdonnance}
