const {
  BaseModelSql
} = require('xc-data-mapper');

class pay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./pay.meta.js')
    });

  }

}


module.exports = pay;