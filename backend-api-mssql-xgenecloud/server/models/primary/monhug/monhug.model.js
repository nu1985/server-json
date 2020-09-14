const {
  BaseModelSql
} = require('xc-data-mapper');

class monhug extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./monhug.meta.js')
    });

  }

}


module.exports = monhug;