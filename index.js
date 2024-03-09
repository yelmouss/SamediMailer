const express = require('express')
const app = express()
const port = 8000
app.use(express.json());
var cors = require('cors')
const MailingRoutes = require('./routes/mailingRoutes')

app.use('/api',  MailingRoutes)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})