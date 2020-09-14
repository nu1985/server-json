const {
  BaseModelSql
} = require('xc-data-mapper');

class district extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./district.meta.js')
    });

  }

}


module.exports = district;