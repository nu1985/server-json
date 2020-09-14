const {
  BaseModelSql
} = require('xc-data-mapper');

class numdead_up extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./numdead_up.meta.js')
    });

  }

}


module.exports = numdead_up;