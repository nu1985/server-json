const {
  BaseModelSql
} = require('xc-data-mapper');

class mon_before_start extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./mon_before_start.meta.js')
    });

  }

}


module.exports = mon_before_start;