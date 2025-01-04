let model = require("../model/ordonnance")
const ordonnanceController = {
    async default(req, res) {
        try{
            let data = (req.param.id !== "")? model.getOrdonnance(req.param.nom):  model.getOrdonnance()
            console.log(data)
            res.send(data)
        } catch (e) {
            console.log(e)
        }

    },
    async add(req, res) {
        try {
            const ordonnance = {
                medicament: req.body.medicament,
                duree: req.body.duree,
                debut: req.body.debut,
                posologie: req.body.posologie,
                client: req.body.client
            };
            if (ordonnance.medicament != "" & ordonnance.duree != "" & ordonnance.debut != ""& ordonnance.posologie != ""& ordonnance.client != "") {
                console.log(ordonnance)
                res.send(model.addOrdonnance(ordonnance))
            }
        }
        catch (e) {
            console.log(e)
        }
    },
    async del(req, res) {
        try {
            res.send(model.delOrdonnance(req.param.id))
        }
        catch (e) {
            console.log(e)
        }
    },
    async edit(req, res) {
        try {
            const ordonnance = {
                medicament: req.body.medicament,
                duree: req.body.duree,
                debut: req.body.debut,
                posologie: req.body.posologie,
                client: req.body.client
            };
            if (ordonnance.medicament != "" & ordonnance.duree != "" & ordonnance.debut != ""& ordonnance.posologie != ""& ordonnance.client != "") {
                console.log(ordonnance)
                res.send(model.editOrdonnance(ordonnance))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = ordonnanceController
