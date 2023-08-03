const db = require('../../banco/dbConexao')

    module.exports = class portfolioMode {       

    static getTodos(callback){
      return db.query("SELECT * FROM portfolio" , callback);
    }
};
