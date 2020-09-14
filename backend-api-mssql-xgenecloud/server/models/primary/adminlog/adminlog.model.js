const {
  BaseModelSql
} = require('xc-data-mapper');

class adminlog extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./adminlog.meta.js')
    });

  }

}


module.exports = adminlog;