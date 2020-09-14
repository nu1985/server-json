const {
  BaseModelSql
} = require('xc-data-mapper');

class cause extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./cause.meta.js')
    });

  }

}


module.exports = cause;