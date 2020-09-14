module.exports = {
  tableName: 'useradmin',
  columns: [{
      columnName: 'userId',
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
      columnName: 'username',
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
      columnName: 'password',
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
      columnName: 'fullname',
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
      columnName: 'authenid',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "1",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_01',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_02',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_03',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_04',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_05',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'menu_06',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "20",
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