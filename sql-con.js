var mysql = require('mysql'); // import the mysql package
class sqlcon {

    constructor(cred) {

        this.host = cred['host'];
        this.user = cred['user'];
        this.password = cred['password'];
      }
  
      getConCred() {
      return `
        Name: ${this.host}
        Age: ${this.user}
        Email: ${this.password}
      `;
    }

    connect() {
        var con = mysql.createConnection({
          host: this.host,
          user: this.user,
          password: this.password 
          });
          
         con.connect(function(err) {
          if (err) throw err;
          console.log("Connected!");
          });
      }
  }
  
  module.exports = sqlcon;