const express = require('express')
const app = express()
const bodyParser = require('body-parser');
// const logger = require('./util/logger.js')

app.get('/', function (req, res) {
    res.send('Hello world 123')
})

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use('/api', require('./router/index'));


app.listen(4444, () => {
    console.log('Example app listening on port 4444!')
})