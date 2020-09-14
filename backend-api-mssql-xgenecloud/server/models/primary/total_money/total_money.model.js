const {
  BaseModelSql
} = require('xc-data-mapper');

class total_money extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./total_money.meta.js')
    });

  }

}


module.exports = total_money;