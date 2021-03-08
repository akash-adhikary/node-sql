const express = require('express')
const sqlcon = require('./sql-con');
            const connection = new sqlcon("sql6.freemysqlhosting.net","sql6396795","nr7Ec14Vti");
            const app = express()
            const port = 3000
            console.log(connection.getConCred());
            connection.connect();

            app.get('/', (req, res) => {
            res.send('Hello World!')
            })

            app.listen(port, () => {
                console.log(`Example app listening at http://localhost:${port}`)
            });

            