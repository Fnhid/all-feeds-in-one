
const app = express()
const router = require("./router/router");
app.use('/', router)

app.listen(8080, () => {
    console.log('listening on 8080');
})