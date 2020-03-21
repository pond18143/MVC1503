// const moment = require('moment');
const logger = require('../util/logger.js');
var sql = require("mssql");
// config for your database
var config = {
    user: 'sa',
    password: 'P@d0rU123',
    server: '167.71.200.91',
    database: 'pDB'
};

var err = sql.connect(config)
if (err) console.log(err);

class request {
        //สร้างข้อมูล
//     async create(req) {
//         let FunctionName = '[create]'
//         logger.info(FunctionName)
//         return new Promise(async function (resolve, reject) {
//             try{
//                 var account_number = req.account_number
//                 var pin = req.pin
//                 var balance = req.balance
//
//                 var request = new sql.Request();
//                 var command = `INSERT INTO mvc
//         (account_number, pin, balance)
//         VALUES('${account_number}', '${pin}', '${balance}')`;
//                var result = await request.query(command); //นำเข้าข้อมูลใส่ db
//                 console.log(result)
//             }catch (error) { //ดัก error
//                 let messageError = {
//                     statusCode: error.statusCode || 400,
//                     message: error.message || `${functionName} CREATE failed [Error] ${error}`
//                 }
//                 logger.error(messageError.message)
//                 reject(messageError)
//             }
//         })
//     }
    //ฝากเงิน
    async deposit(req) {
        var depo =req.depo
        //เชคเงินฝากมากกว่า100 และ เชคว่าเป็นธนาบัตร
        if (depo>100 && depo%100 ==0){
        var request = new sql.Request();
        var command = await request.query(`UPDATE pDB.dbo.mvc
        SET balance =balance+${depo}
        WHERE account_number = ${req.account_number} AND pin =${req.pin} `);
        logger.debug(command.recordset);
        return command
        }
    }
    //ถอนเงิน
    async withdraw(req) {
        var withd =req.withd
        //เชคเงินถอนน้อยกว่า20000 และ เชคว่าเป็นธนาบัตร
        if (withd<20000 && withd%100 ==0 ){
        var request = new sql.Request();
        var command = await request.query(`UPDATE pDB.dbo.mvc
        SET balance =balance-${withd}
        WHERE account_number = ${req.account_number} AND pin =${req.pin} `);
        logger.debug(command.recordset);
        return command
        }
    }
   //เช็คยอดเงิน
    async getid(req) {
        var request = new sql.Request();
        var command = await request.query(`SELECT balance
        FROM pDB.dbo.mvc
        WHERE account_number = ${req.account_number} AND pin =${req.pin} `);
        logger.debug(command.recordset);
        return command
    }
    //โอนเงิน
    async tranfer(req) {
        var ac1 =req.ac1;var pi =req.pi1;//เลขบัฐชีกับรหัสของคนโอน
        var ac2 =req.ac2
        var tran =req.tran
        //เช็คเงินถอนน้อยกว่า1ล้าน
        if (tran<=1000000){
        var request = new sql.Request();
        var command = await request.query(`UPDATE pDB.dbo.mvc
        SET balance =balance-${tran}
        WHERE account_number = ${req.ac1} AND pin =${req.pi1}
        UPDATE pDB.dbo.mvc
        SET balance =balance+${tran}
        WHERE account_number = ${req.ac2}`);
        logger.debug(command.recordset);
        return command
        }
    }
}

module.exports = request