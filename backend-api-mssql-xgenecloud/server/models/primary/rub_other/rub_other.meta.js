module.exports = {
  tableName: 'rub_other',
  columns: [{
      columnName: 'id',
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
      columnName: 'rub_id',
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
      columnName: 'money_detail',
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
      columnName: 'money_pay',
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
      columnName: 'bill_no',
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
      columnName: 'date_to_pay',
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
      columnName: 'Drub',
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
      columnName: 'Mrub',
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
      columnName: 'Yrub',
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
      columnName: 'name_pay',
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
      columnName: 'date_mem',
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
  ],
  pks: [],
  hasMany: [],
  belongsTo: [],
  dbType: 'mssql'
}