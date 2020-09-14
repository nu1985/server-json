module.exports = {
  tableName: 'amphur',
  columns: [{
      columnName: 'AMPHUR_ID',
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
      columnName: 'AMPHUR_CODE',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "4",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'AMPHUR_NAME',
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
    {
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mssql'
}