const {
  BaseModelSql
} = require('xc-data-mapper');

class numpay_years_02 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numpay_years_02.meta.js')
    });

  }

}


module.exports = numpay_years_02;