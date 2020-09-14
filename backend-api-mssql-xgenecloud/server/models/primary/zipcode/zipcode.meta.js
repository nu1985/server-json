module.exports = {
  tableName: 'zipcode',
  columns: [{
      columnName: 'ZIPCODE_ID',
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
      columnName: 'DISTRICT_CODE',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'PROVINCE_ID',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'AMPHUR_ID',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'DISTRICT_ID',
      type: 'string',
      dataType: 'nvarchar',
      notNull: true,
      data_type_x_precision: "-1",
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
      notNull: true,
      data_type_x_precision: "-1",
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