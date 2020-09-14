const {
  BaseModelSql
} = require('xc-data-mapper');

class status extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./status.meta.js')
    });

  }

}


module.exports = status;