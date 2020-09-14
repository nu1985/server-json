const {
  BaseModelSql
} = require('xc-data-mapper');

class province extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./province.meta.js')
    });

  }

}


module.exports = province;