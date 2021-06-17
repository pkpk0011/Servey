const express = require('express');
const app = express();
const port = 3001; //process.env.PORT || 
const mysql = require('mysql');
const cors = require('cors');
const { response } = require('express');
const router = express.Router();
app.use(express.json());
app.use(cors());

const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'96105703',
    port:3306,
    database:'datamond'
});

connection.connect(function(err) {
    if (err) throw err;
    console.log('Connectecd');
});

app.use(`/quiz`, (req, res) => {
    const sql = 'Select * from `QUIZ`';
    connection.query(sql, function (err, result){

        let quiz_list = result.map(
            function (currentArray) {
                return currentArray
            }
        )
        
        res.json({quiz_list:quiz_list});
    });
});



module.exports = router;

app.listen(port, ()=>{
  console.log(`express is running on ${port}`);
});
