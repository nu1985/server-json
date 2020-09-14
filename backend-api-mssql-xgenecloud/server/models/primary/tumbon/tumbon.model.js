const {
  BaseModelSql
} = require('xc-data-mapper');

class tumbon extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./tumbon.meta.js')
    });

  }

}


module.exports = tumbon;