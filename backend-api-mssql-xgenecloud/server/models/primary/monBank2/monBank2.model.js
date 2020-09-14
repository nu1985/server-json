const {
  BaseModelSql
} = require('xc-data-mapper');

class monBank2 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monBank2.meta.js')
    });

  }

}


module.exports = monBank2;