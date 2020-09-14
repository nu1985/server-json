const {
  BaseModelSql
} = require('xc-data-mapper');

class sinpeemem extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./sinpeemem.meta.js')
    });

  }

}


module.exports = sinpeemem;