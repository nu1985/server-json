const {
  BaseModelSql
} = require('xc-data-mapper');

class accountdetail extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./accountdetail.meta.js')
    });

  }

}


module.exports = accountdetail;