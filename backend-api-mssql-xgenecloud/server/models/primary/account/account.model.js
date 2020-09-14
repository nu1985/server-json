const {
  BaseModelSql
} = require('xc-data-mapper');

class account extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./account.meta.js')
    });

  }

}


module.exports = account;