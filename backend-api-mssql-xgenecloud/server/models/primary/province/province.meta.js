module.exports = {
  tableName: 'province',
  columns: [{
      columnName: 'PROVINCE_ID',
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
      columnName: 'PROVINCE_CODE',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "2",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'PROVINCE_NAME',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "150",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'GEO_ID',
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