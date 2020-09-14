const {
  BaseModelSql
} = require('xc-data-mapper');

class num_deadcheck extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./num_deadcheck.meta.js')
    });

  }

}


module.exports = num_deadcheck;