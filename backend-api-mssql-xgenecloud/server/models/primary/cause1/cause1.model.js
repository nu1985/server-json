const {
  BaseModelSql
} = require('xc-data-mapper');

class cause1 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./cause1.meta.js')
    });

  }

}


module.exports = cause1;