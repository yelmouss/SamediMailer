const express = require("express")
const router = express.Router()

const MailingContrtoller = require('../controllers/MailingController')

router.post('/SendEmail', MailingContrtoller.SayfatMail)

module.exports = router