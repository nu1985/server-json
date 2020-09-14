const {
  BaseModelSql
} = require('xc-data-mapper');

class numpay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numpay.meta.js')
    });

  }

}


module.exports = numpay;