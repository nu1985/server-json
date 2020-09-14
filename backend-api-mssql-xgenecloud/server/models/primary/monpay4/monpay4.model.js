const {
  BaseModelSql
} = require('xc-data-mapper');

class monpay4 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monpay4.meta.js')
    });

  }

}


module.exports = monpay4;