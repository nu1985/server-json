module.exports = {
  tableName: 'district',
  columns: [{
      columnName: 'DISTRICT_ID',
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
      columnName: 'DISTRICT_CODE',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "6",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'DISTRICT_NAME',
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
      columnName: 'ZIPCODE',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "255",
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