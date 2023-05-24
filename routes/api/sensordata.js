const express = require('express');

var router = express.Router();
var dbConn = require('../../config/db.js');

//INSERT
/*Routes POST API/SensorData/Add*/
/*Desc: Insert Data into Database*/
/*Access: Private*/
router.post('/add',(req,res)=>{
    console.log(req);

    var Temperature = req.body.Temperature;
    var Humidity = req.body.Humidity;
    var FanState = req.body.FanStatus;
    var DeviceName = req.body.DeviceName;

    var sqlQuery = `INSERT INTO rice_db(Temperature,Humidity,FanStatus,DeviceName)VALUES ('${Temperature}', '${Humidity}','${FanState}', '${DeviceName}')`;
    
   dbConn.query(sqlQuery, function(error,results){
        if(error) throw error;
        res.status(200).json({'msg':'Data Inserted Successfully', res: results});

    });
    
});

//SELECT or VIEW
/*Routes GET API/Temperature/View*/
/*Desc: Display Data into Database*/
/*Access: Public*/
router.get("/view",(req,res)=>{
    console.log(req);

    var sqlQuery = `SELECT * FROM rice_db`;

    dbConn.query(sqlQuery, function(error,results){
        if(error) throw error;
        res.status(200).json({'msg':'Data Inserted Successfully', res: results});

    });
    
});

module.exports = router;