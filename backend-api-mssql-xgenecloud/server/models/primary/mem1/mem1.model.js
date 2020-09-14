const {
  BaseModelSql
} = require('xc-data-mapper');

class mem1 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./mem1.meta.js')
    });

  }

}


module.exports = mem1;