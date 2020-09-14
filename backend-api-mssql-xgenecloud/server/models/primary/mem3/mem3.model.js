const {
  BaseModelSql
} = require('xc-data-mapper');

class mem3 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./mem3.meta.js')
    });

  }

}


module.exports = mem3;