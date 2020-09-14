const {
  BaseModelSql
} = require('xc-data-mapper');

class numpay_month extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numpay_month.meta.js')
    });

  }

}


module.exports = numpay_month;