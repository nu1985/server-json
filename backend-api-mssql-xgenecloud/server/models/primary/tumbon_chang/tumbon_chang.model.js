const {
  BaseModelSql
} = require('xc-data-mapper');

class tumbon_chang extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tumbon_chang.meta.js')
    });

  }

}


module.exports = tumbon_chang;