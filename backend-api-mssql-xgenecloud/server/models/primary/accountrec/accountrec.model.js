const {
  BaseModelSql
} = require('xc-data-mapper');

class accountrec extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./accountrec.meta.js')
    });

  }

}


module.exports = accountrec;