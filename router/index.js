const express = require('express')
const app = express()
const request = require('../controller/handle');
const logger = require('../util/logger.js');

app.get('/test', (req,res) => {
    res.send('test')
})

// app.post(`/create` ,async (req , res)=> {
//     try {
//         var result = await new request().create(req.body)
//         res.status(201)
//         res.json(result)
//         console.log(result)
//     } catch (error) {
//         let messageError = {
//             statusCode: error.statusCode || 400,
//             message: error.message || error
//         }
//         res.status(messageError.statusCode)
//         res.json(messageError)
//         logger.error(messageError.message)
//     }
// });
app.post('/deposit', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().deposit(req.body)
    res.json(result.recordset);
});
app.post('/withdraw', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().withdraw(req.body)
    res.json(result.recordset);
});
app.post('/getid', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().getid(req.body)
    res.json(result.recordset);
});
app.post('/tranfer', async (req, res) => {
    logger.debug(req.body)
    var result = await new request().tranfer(req.body)
    res.json(result.recordset);
})
module.exports = app
