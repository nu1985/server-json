const {
  BaseModelSql
} = require('xc-data-mapper');

class numpay_years extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numpay_years.meta.js')
    });

  }

}


module.exports = numpay_years;