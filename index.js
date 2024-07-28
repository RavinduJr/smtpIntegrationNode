const express = require('express')
const bodyParer = require("body-parser")
const {port, smtpIntegrationApi} = require("./constants")
const smtpIntegrationHandler = require("./smtpIntegrationHandler")

const app = express()

app.use(bodyParer.json())
app.use(smtpIntegrationApi, smtpIntegrationHandler)

app.listen(port, () => {
    console.log("came here")
})