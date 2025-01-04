const express =  require('express')
const controller = require('../controler/clients')
const router = express.Router()

router.get('/:nom', controller.default)
router.get('/', controller.default)
router.post("/", controller.add)
router.delete("/:id", controller.del)
router.patch("/", controller.edit)

module.exports = router
