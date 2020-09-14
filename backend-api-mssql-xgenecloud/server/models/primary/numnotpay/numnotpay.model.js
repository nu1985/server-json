const {
  BaseModelSql
} = require('xc-data-mapper');

class numnotpay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numnotpay.meta.js')
    });

  }

}


module.exports = numnotpay;