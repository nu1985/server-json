const {
  BaseModelSql
} = require('xc-data-mapper');

class rub extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./rub.meta.js')
    });

  }

}


module.exports = rub;