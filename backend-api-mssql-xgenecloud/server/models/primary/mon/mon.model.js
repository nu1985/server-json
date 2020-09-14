const {
  BaseModelSql
} = require('xc-data-mapper');

class mon extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./mon.meta.js')
    });

  }

}


module.exports = mon;