const {
  BaseModelSql
} = require('xc-data-mapper');

class tumbon_authoall extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tumbon_authoall.meta.js')
    });

  }

}


module.exports = tumbon_authoall;