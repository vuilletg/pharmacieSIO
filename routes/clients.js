const express =  require('express')
const controller = require('../controler/clients')
const router = express.Router()

router.get('/', controller.default)
router.post("/", controller.add)

module.exports = router
