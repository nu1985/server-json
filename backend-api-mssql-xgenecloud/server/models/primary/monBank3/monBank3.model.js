const {
  BaseModelSql
} = require('xc-data-mapper');

class monBank3 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monBank3.meta.js')
    });

  }

}


module.exports = monBank3;