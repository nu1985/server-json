const {
  BaseModelSql
} = require('xc-data-mapper');

class yearsrecord extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./yearsrecord.meta.js')
    });

  }

}


module.exports = yearsrecord;