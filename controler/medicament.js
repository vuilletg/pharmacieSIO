let model = require("../model/medicament")
const medicamentController = {
    async default(req, res) {
        try{
            let data = (req.param.id !== "")? model.getMedicament(req.param.nom):  model.getMedicament()
            console.log(data)
            res.send(data)
        } catch (e) {
            console.log(e)
        }

    },
    async add(req, res) {
        try {
            const medicament = {
                nom: req.body.nom,
                mode: req.body.mode,
                stock: req.body.stock
            };
            if (medicament.nom != "" & medicament.mode != "" & medicament.stock != "") {
                console.log(medicament)
                res.send(model.addMedicament(medicament))
            }
        }
        catch (e) {
            console.log(e)
        }
    },
    async del(req, res) {
        try {
            res.send(model.delMedicament(req.param.id))
        }
        catch (e) {
            console.log(e)
        }
    },
    async edit(req, res) {
        try {
            const medicament = {
                nom: req.body.nom,
                mode: req.body.mode,
                stock: req.body.stock
            };
            if (medicament.nom != "" & medicament.mode != "" & medicament.stock != "") {
                console.log(medicament)
                res.send(model.editMedicament(medicament))
            }
        }
        catch (e) {
            console.log(e)
        }
    }
}
module.exports = medicamentController
