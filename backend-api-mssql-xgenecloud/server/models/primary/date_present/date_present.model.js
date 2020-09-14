const {
  BaseModelSql
} = require('xc-data-mapper');

class date_present extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./date_present.meta.js')
    });

  }

}


module.exports = date_present;