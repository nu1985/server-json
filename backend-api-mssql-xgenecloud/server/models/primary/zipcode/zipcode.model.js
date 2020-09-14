const {
  BaseModelSql
} = require('xc-data-mapper');

class zipcode extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./zipcode.meta.js')
    });

  }

}


module.exports = zipcode;