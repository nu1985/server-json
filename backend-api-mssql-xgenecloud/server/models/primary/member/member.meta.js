module.exports = {
  tableName: 'member',
  columns: [{
      columnName: 'member_id',
      type: 'bigInteger',
      dataType: 'bigint',
	   notNull: true,
      primaryKey: true,
      autoIncrement: true,
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
  {
      columnName: 'ID',
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
      columnName: 'rang_id',
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
      columnName: 'rang_name',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'lastname',
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
      columnName: 'name_old',
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
      columnName: 'member_up',
      type: 'bigInteger',
      dataType: 'bigint',
      data_type_x_precision: "19",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_up_re',
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
      columnName: 'pass_id',
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
      columnName: 'group_id',
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
      columnName: 'id_13',
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
      columnName: 'type_name_id',
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
      columnName: 'type_name222',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'position',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'kotobo',
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
      columnName: 'type_name_id_2',
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
      columnName: 'relation',
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
      columnName: 'numdead_start',
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
      columnName: 'bill_id_start',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'pay_check',
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
      columnName: 'cause_not_id',
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
      columnName: 'cause_out_id',
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
      columnName: 'cause_out',
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
      columnName: 'birth',
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
      columnName: 'age',
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
      columnName: 'tel',
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
      columnName: 'add_num',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "250",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'add_mu',
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
      columnName: 'ban',
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
      columnName: 'road',
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
      columnName: 'soi',
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
      columnName: 'tumbon_id',
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
      columnName: 'tumbon_nameout',
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
      columnName: 'ampher',
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
      columnName: 'province',
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
      columnName: 'post',
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
      columnName: 'hus_wife',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'child',
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
      columnName: 'date_first',
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
      columnName: 'Ddate_first',
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
      columnName: 'Mdate_first',
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
      columnName: 'Ydate_first',
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
      columnName: 'date_first1',
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
      columnName: 'Ddate_first1',
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
      columnName: 'Mdate_first1',
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
      columnName: 'Ydate_first1',
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
      columnName: 'date_first2',
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
      columnName: 'Ddate_first2',
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
      columnName: 'Mdate_first2',
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
      columnName: 'Ydate_first2',
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
      columnName: 'date_continue',
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
      columnName: 'monney_fee',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'money_det',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_pay',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'money_before',
      type: 'float',
      dataType: 'float',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "53",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'date_money_before',
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
      columnName: 'money_before_dead',
      type: 'float',
      dataType: 'float',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "53",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'numdead_update',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'dead_number1up',
      type: 'string',
      dataType: 'nvarchar',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'dead_number2up',
      type: 'string',
      dataType: 'nvarchar',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "50",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'pay_number_update',
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
      columnName: 'years_up',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'remark1',
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
      columnName: 'status_id',
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
      columnName: 'how_to_pay',
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
      columnName: 'date_dead',
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
      columnName: 'Ddate_dead',
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
      columnName: 'Mdate_dead',
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
      columnName: 'Ydate_dead',
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
      columnName: 'date_dead_inform',
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
      columnName: 'num_dead',
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
      columnName: 'num_dead_month',
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
      columnName: 'cause',
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
      columnName: 'cause_dead',
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
      columnName: 'pay_dead',
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
      columnName: 'pay_dead2',
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
      columnName: 'pay_dead3',
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
      columnName: 'pay_dead_center',
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
      columnName: 'pay_percen',
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
      columnName: 'pay_percen2',
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
      columnName: 'pay_percen3',
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
      columnName: 'pay_mark',
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
      columnName: 'name_dead1',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead1_id13',
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
      columnName: 'add_name_dead1',
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
      columnName: 'name_dead11',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead2',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'add_name_dead2',
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
      columnName: 'name_dead2_id13',
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
      columnName: 'name_dead22',
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
      columnName: 'name_dead3',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead3_id13',
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
      columnName: 'add_name_dead3',
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
      columnName: 'name_dead33',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead4',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead4_id13',
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
      columnName: 'add_name_dead4',
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
      columnName: 'name_dead44',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead5',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead5_id13',
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
      columnName: 'add_name_dead5',
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
      columnName: 'name_dead55',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_manag',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "250",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'date_pay',
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
      columnName: 'Ddate_pay',
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
      columnName: 'Mdate_pay',
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
      columnName: 'Ydate_pay',
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
      columnName: 'date_pay2',
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
      columnName: 'Ddate_pay2',
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
      columnName: 'Mdate_pay2',
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
      columnName: 'Ydate_pay2',
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
      columnName: 'date_pay3',
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
      columnName: 'Ddate_pay3',
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
      columnName: 'Mdate_pay3',
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
      columnName: 'Ydate_pay3',
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
      columnName: 'remark2',
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
      columnName: 'remark3',
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
      columnName: 'file_pic',
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
      columnName: 'file_pdf',
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
      columnName: 'timestamp',
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
      columnName: 'timesend',
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
      columnName: 'datesend',
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
      columnName: 'reson_recive',
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
      columnName: 'nation',
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
      columnName: 'occu',
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
      columnName: 'line',
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
      columnName: 'yokyod',
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
      columnName: 'dateKang52',
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
      columnName: 'numD',
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
      columnName: 'yearsD',
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
      columnName: 'line3',
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
      columnName: 'type_reg',
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
      columnName: 'telhome',
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
      columnName: 're1',
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
      columnName: 're2',
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
      columnName: 're3',
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
      columnName: 're4',
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
      columnName: 're5',
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
      columnName: 'email',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'lineid',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'status_marid',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'per_1',
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
      columnName: 'per_2',
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
      columnName: 'per_3',
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
      columnName: 'per_4',
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
      columnName: 'per_5',
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
      columnName: 'Nbank_0',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Nbank_1',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Nbank_2',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Nbank_3',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Nbank_4',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Nbank_5',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'bank_id_0',
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
      columnName: 'brance_0',
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
      columnName: 'bank_id_1',
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
      columnName: 'bank_id_2',
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
      columnName: 'bank_id_3',
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
      columnName: 'bank_id_4',
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
      columnName: 'bank_id_5',
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
      columnName: 'number_bank_0',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_bank_1',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_bank_2',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_bank_3',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_bank_4',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'number_bank_5',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'Ydate_first_Num',
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
      columnName: 'monkang01',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'monkang02',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'monkang03',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'monkang',
      type: 'integer',
      dataType: 'int',
      default: "((0))",
      columnDefault: "((0))",
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'datefirst_pay',
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
      columnName: 'yearsfirst_pay',
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
      columnName: 'meeting_01',
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
      columnName: 'meeting_year',
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
      columnName: 'tel2',
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
      columnName: 'name_dead6',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead_id136',
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
      columnName: 'add_name_dead6',
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
      columnName: 're6',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "60",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead7',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead_id137',
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
      columnName: 'add_name_dead7',
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
      columnName: 're7',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "60",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead8',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead_id138',
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
      columnName: 'add_name_dead8',
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
      columnName: 're8',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "60",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead9',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead_id139',
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
      columnName: 'add_name_dead9',
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
      columnName: 're9',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "60",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead10',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "100",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'name_dead_id1310',
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
      columnName: 'add_name_dead10',
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
      columnName: 're10',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "60",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'add01',
      type: 'string',
      dataType: 'nchar',
      data_type_x_precision: "10",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'add_num2',
      type: 'string',
      dataType: 'nvarchar',
      data_type_x_precision: "250",
      validate: {
        func: [],
        args: [],
        msg: []
      },
    },
    {
      columnName: 'tumbon_nameout2',
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
      columnName: 'ampher2',
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
      columnName: 'province2',
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
      columnName: 'post2',
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