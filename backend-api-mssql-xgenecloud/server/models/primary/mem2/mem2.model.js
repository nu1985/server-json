const {
  BaseModelSql
} = require('xc-data-mapper');

class mem2 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./mem2.meta.js')
    });

  }

}


module.exports = mem2;