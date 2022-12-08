const express = require('express')  
const app = express()
const router = require("./router/parser");
app.use('/', router)

app.listen(8080, () => {
    console.log('listening on 8080');
})