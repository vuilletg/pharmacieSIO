let model = require("../model/client")
const clientsController = {
    async default(req, res) {
        try{
            let data = (req.param.nom !== "")? model.getClient(req.param.nom):  model.getClient()
            console.log(data)
            res.send(data)
        } catch (e) {
            console.log(e.message)
        }

    },
    async add(req, res) {
        try {
            const client = {
                secu: req.body.secu,
                nom: req.body.nom,
                prenom: req.body.prenom,
                mutuelle: req.body.mutuelle,
                D_N: req.body.D_N
            };
            if (client.nom != "" & client.mutuelle != "" & client.secu != "" & client.prenom != "" & client.D_N != "") {
                console.log(client)
                res.send(model.addClient(client))
            }
        }
        catch (e) {
            console.log(e)
        }
    },
    async del(req, res) {
        try {
                res.send(model.delClient(req.param.id))
        }
        catch (e) {
            console.log(e)
        }
    },
    async edit(req, res) {
        try {
            const client = {
                secu: req.body.secu,
                nom: req.body.nom,
                prenom: req.body.prenom,
                mutuelle: req.body.mutuelle,
                D_N: req.body.D_N
            };
            if (client.nom != "" & client.mutuelle != "" & client.secu != "" & client.prenom != "" & client.D_N != "") {
                console.log(client)
                res.send(model.editClient(client))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = clientsController
