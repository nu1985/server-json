const {
  BaseModelSql
} = require('xc-data-mapper');

class member_pay_2 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./member_pay_2.meta.js')
    });

  }

}


module.exports = member_pay_2;