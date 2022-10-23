const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')

router.post('/register',userController.register)
router.post('/activate',userController.activateAccount)
router.post('/login',userController.login)

module.exports = router;