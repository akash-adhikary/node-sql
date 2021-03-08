var mysql = require('mysql'); // import the mysql package
class sqlcon {

    constructor(host, user, password) {
        this.host = host;
        this.user = user;
        this.password = password;
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