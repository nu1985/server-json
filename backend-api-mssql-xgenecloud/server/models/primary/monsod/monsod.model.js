const {
  BaseModelSql
} = require('xc-data-mapper');

class monsod extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monsod.meta.js')
    });

  }

}


module.exports = monsod;