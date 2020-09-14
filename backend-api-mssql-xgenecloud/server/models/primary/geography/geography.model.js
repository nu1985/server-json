const {
  BaseModelSql
} = require('xc-data-mapper');

class geography extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./geography.meta.js')
    });

  }

}


module.exports = geography;