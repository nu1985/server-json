const {
  BaseModelSql
} = require('xc-data-mapper');

class memnew_id_update extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./memnew_id_update.meta.js')
    });

  }

}


module.exports = memnew_id_update;