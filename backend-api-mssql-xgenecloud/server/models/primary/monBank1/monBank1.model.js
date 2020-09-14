const {
  BaseModelSql
} = require('xc-data-mapper');

class monBank1 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monBank1.meta.js')
    });

  }

}


module.exports = monBank1;