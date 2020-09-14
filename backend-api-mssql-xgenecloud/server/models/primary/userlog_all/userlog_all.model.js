const {
  BaseModelSql
} = require('xc-data-mapper');

class userlog_all extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./userlog_all.meta.js')
    });

  }

}


module.exports = userlog_all;