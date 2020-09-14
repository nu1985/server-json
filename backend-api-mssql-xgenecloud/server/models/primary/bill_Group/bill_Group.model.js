const {
  BaseModelSql
} = require('xc-data-mapper');

class bill_Group extends BaseModelSql {

  constructor({
    dbDriver
  }) {

    super({
      dbDriver,
      ...require('./bill_Group.meta.js')
    });

  }

}


module.exports = bill_Group;