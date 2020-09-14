module.exports = {
  tableName: 'memnew_id_update',
  columns: [{
      columnName: 'mem_id',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'memnew_id_update',
      type: 'bigInteger',
      dataType: 'bigint',
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mssql'
}