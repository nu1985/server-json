const {
  BaseModelSql
} = require('xc-data-mapper');

class useradmin extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./useradmin.meta.js')
    });

  }

}


module.exports = useradmin;