const {
  BaseModelSql
} = require('xc-data-mapper');

class accountNee extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./accountNee.meta.js')
    });

  }

}


module.exports = accountNee;