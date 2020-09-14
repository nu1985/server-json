const {
  BaseModelSql
} = require('xc-data-mapper');

class type_name extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./type_name.meta.js')
    });

  }

}


module.exports = type_name;