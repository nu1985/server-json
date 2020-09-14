const {
  BaseModelSql
} = require('xc-data-mapper');

class type_name_2 extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./type_name_2.meta.js')
    });

  }

}


module.exports = type_name_2;