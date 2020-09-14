module.exports = {
  tableName: 'numpay',
  columns: [{
      columnName: 'ID',
      type: 'integer',
      dataType: 'int',
      notNull: true,
      autoIncrement: true,
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'dead_pay1',
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
      columnName: 'dead_pay2',
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
      columnName: 'num_pay',
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
      columnName: 'pay',
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
      columnName: 'pay_4',
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
      columnName: 'deadnum1',
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
      columnName: 'deadnum2',
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
      columnName: 'monney_before_center',
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
    {
      columnName: 'datefirst_pay_numpay',
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
      columnName: 'yearsfirst_pay_numpay',
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