const {
  BaseModelSql
} = require('xc-data-mapper');

class monJay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monJay.meta.js')
    });

  }

}


module.exports = monJay;