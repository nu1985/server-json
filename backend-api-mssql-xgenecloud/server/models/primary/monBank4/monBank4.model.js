const {
  BaseModelSql
} = require('xc-data-mapper');

class monBank4 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monBank4.meta.js')
    });

  }

}


module.exports = monBank4;