const {
  BaseModelSql
} = require('xc-data-mapper');

class monsod_Day extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monsod_Day.meta.js')
    });

  }

}


module.exports = monsod_Day;