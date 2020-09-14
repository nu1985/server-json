const {
  BaseModelSql
} = require('xc-data-mapper');

class rang extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./rang.meta.js')
    });

  }

}


module.exports = rang;