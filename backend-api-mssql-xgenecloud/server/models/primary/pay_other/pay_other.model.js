const {
  BaseModelSql
} = require('xc-data-mapper');

class pay_other extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./pay_other.meta.js')
    });

  }

}


module.exports = pay_other;