const {
  BaseModelSql
} = require('xc-data-mapper');

class accountdetailNee extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./accountdetailNee.meta.js')
    });

  }

}


module.exports = accountdetailNee;