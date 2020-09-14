const {
  BaseModelSql
} = require('xc-data-mapper');

class bill_update extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./bill_update.meta.js')
    });

  }

}


module.exports = bill_update;