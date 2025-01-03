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
            // Les données sont récupérées dans le corps de la requête
            const client = {
                secu: req.body.secu,
                nom: req.body.nom,
                prenom: req.body.prenom,
                mutuelle: req.body.mutuelle,
                D_N: req.body.D_N
            };
            if (client.nom != "" & client.mutuelle != "" & client.secu != "" & client.prenom != "" & client.D_N != "") {
                // on transmet le nouvel utilisateur à la fonction 'addmedecin' dans le modèle
                let data =  model.addClient(client)
            }
        }
        catch (e) {
            console.log(e)
        }
    },
}
module.exports = clientsController
