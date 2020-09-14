const {
  BaseModelSql
} = require('xc-data-mapper');

class numpay_memnew extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numpay_memnew.meta.js')
    });

  }

}


module.exports = numpay_memnew;