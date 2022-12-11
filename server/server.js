const express = require('express')  
const app = express()
const router = require("./parser");
app.use('/api', router)

app.listen(8080, () => {
    console.log('listening on 8080');
})