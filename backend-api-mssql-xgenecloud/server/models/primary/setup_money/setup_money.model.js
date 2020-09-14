const {
  BaseModelSql
} = require('xc-data-mapper');

class setup_money extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./setup_money.meta.js')
    });

  }

}


module.exports = setup_money;