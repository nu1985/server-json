const {
  BaseModelSql
} = require('xc-data-mapper');

class rub_other extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./rub_other.meta.js')
    });

  }

}


module.exports = rub_other;