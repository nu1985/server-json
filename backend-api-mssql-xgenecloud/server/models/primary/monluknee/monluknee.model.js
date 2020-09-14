const {
  BaseModelSql
} = require('xc-data-mapper');

class monluknee extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monluknee.meta.js')
    });

  }

}


module.exports = monluknee;