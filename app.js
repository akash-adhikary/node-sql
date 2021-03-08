const express = require('express')
            const app = express()
            const port = 3000

            app.get('/', (req, res) => {
            res.send('Hello World!')
            })

            var mysql = require('mysql'); // import the mysql package

            //function expression for connecting to mysql server
            var con = mysql.createConnection({
            host: "remotemysql.com",
            user: "W8vaF36tSl",
            password: "YaHozzd3UP" 
            });

            con.connect(function(err) {
            if (err) throw err;
            console.log("Connected!");
            });

            app.listen(port, () => {
                console.log(`Example app listening at http://localhost:${port}`)
            });

