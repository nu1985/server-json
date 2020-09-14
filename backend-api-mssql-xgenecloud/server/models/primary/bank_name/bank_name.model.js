const {
  BaseModelSql
} = require('xc-data-mapper');

class bank_name extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./bank_name.meta.js')
    });

  }

}


module.exports = bank_name;