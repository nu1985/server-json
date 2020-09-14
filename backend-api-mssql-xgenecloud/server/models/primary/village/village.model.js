const {
  BaseModelSql
} = require('xc-data-mapper');

class village extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./village.meta.js')
    });

  }

}


module.exports = village;