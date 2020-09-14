const {
  BaseModelSql
} = require('xc-data-mapper');

class monRubJay extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monRubJay.meta.js')
    });

  }

}


module.exports = monRubJay;