const {
  BaseModelSql
} = require('xc-data-mapper');

class member extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./member.meta.js')
    });

  }

}


module.exports = member;