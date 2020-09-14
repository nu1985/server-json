const {
  BaseModelSql
} = require('xc-data-mapper');

class detail_pay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./detail_pay.meta.js')
    });

  }

}


module.exports = detail_pay;