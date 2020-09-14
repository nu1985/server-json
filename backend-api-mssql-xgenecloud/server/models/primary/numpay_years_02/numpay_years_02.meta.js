module.exports = {
  tableName: 'numpay_years_02',
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
      columnName: 'datefirst_pay',
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
      columnName: 'yearsfirst_pay',
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
      columnName: 'years_pay_num',
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
      columnName: 'years_pay',
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
      columnName: 'mon2_years',
      type: 'float',
      dataType: 'float',
      data_type_x_precision: "53",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'mon4_years',
      type: 'float',
      dataType: 'float',
      data_type_x_precision: "53",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'remark',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "-1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'timestamp',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "255",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'adminname',
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
      columnName: 'type_save',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "50",
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