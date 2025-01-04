const client = require("./bdd")

function getMedicament(critere = false) {

    if (!critere) {
        client.query("SELECT * FROM medicament where nom = " + critere, (err, result) => {
            if (!err) {
                return result
            } else {
                throw new Error("requette impossible" + err)
            }
        })
    } else {
        client.query("SELECT * FROM medicament", (err, result) => {
            if (!err) {
                return result
            } else {
                throw new Error("requette impossible")
            }
        })
    }


}

function addMedicament(param) {

    let req = "insert into medicament (nom, mode,stock) values (" + param.nom + "," + param.mode + "," + param.stock + ")"
    client.query(req, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

function delMedicament(id) {
    client.query("delete from medicament where secu = " + id, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

function editMedicament(param) {

    let req = "update medicament set (nom = " + param.nom + ", MODE = " + param.mode + ", stock = " + param.stock + ") where id = " + param.id
    client.query(req, (err, result) => {
        if (!err) {
            return result
        } else {
            throw err
        }
    })
}

module.exports = {getMedicament, addMedicament, delMedicament, editMedicament}
