const {
  BaseModelSql
} = require('xc-data-mapper');

class detail_name extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./detail_name.meta.js')
    });

  }

}


module.exports = detail_name;