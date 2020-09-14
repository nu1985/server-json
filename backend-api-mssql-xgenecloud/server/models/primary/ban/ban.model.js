const {
  BaseModelSql
} = require('xc-data-mapper');

class ban extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./ban.meta.js')
    });

  }

}


module.exports = ban;