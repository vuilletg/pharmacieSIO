const client = require("./bdd")
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
function addClient(param) {

    let req = "insert into client (secu, nom, prenom, mutuelle, date_naissance) values ("+param.secu+","+param.nom+","+param.prenom+","+param.mutuelle+","+param.D_N+")"
    client.query(req, (err, result)=>{
        if (!err){
            return result
        }else {
            throw err
        }
    })
}
function delClient(id){
    client.query("delete from client where secu = "+id,(err, result)=>{
        if (!err){
            return result
        }else {
            throw err
        }
    })
}
function editClient(param) {

    let req = "update client set (nom = "+param.nom+", prenom = "+param.prenom+", mutuelle = "+param.mutuelle+", date_naissance = "+param.D_N+") where secu = "+param.secu
    client.query(req, (err, result)=>{
        if (!err){
            return result
        }else {
            throw err
        }
    })
}
module.exports = {getClient, addClient, delClient, editClient}
