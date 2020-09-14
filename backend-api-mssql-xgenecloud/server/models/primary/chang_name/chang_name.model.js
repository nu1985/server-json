const {
  BaseModelSql
} = require('xc-data-mapper');

class chang_name extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./chang_name.meta.js')
    });

  }

}


module.exports = chang_name;