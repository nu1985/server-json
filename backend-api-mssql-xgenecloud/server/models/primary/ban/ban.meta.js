module.exports = {
  tableName: 'ban',
  columns: [{
      columnName: 'ID',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ban_id',
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
      columnName: 'ban_name',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'ban_tumbon_id',
      type: 'integer',
      dataType: 'int',
      data_type_x_precision: "10",
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