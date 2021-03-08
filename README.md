# node-sql
nodejs and sql connection 

# prerequisite
1. should have node installed in your system

# Lesson 1
step  1: npm init
step  2: npm install express --save
step  3: create file app.js
step  4: write the following code :-
            const express = require('express')
            const app = express()
            const port = 3000

            app.get('/', (req, res) => {
            res.send('Hello World!')
            })

            app.listen(port, () => {
            console.log('Example app listening at http://localhost:${port}')
            })

# End of Lesson 1

# Lesson 2

step 5: npm install mysql

step 6: write the following code :-
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
