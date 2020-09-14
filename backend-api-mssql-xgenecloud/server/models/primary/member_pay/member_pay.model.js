const {
  BaseModelSql
} = require('xc-data-mapper');

class member_pay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./member_pay.meta.js')
    });

  }

}


module.exports = member_pay;