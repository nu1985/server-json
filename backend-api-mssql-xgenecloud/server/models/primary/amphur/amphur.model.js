const {
  BaseModelSql
} = require('xc-data-mapper');

class amphur extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./amphur.meta.js')
    });

  }

}


module.exports = amphur;