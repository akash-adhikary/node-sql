const express = require('express')
const sqlcon = require('./sql-con')
const Cred = require('./DbCred')
            const connection = new sqlcon(Cred['cred_1']);
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

            