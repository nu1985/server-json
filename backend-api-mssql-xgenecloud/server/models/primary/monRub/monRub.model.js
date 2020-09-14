const {
  BaseModelSql
} = require('xc-data-mapper');

class monRub extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monRub.meta.js')
    });

  }

}


module.exports = monRub;