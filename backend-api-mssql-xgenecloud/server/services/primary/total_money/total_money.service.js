const {
  BaseService
} = require('xc-core');

class TotalMoneyService extends BaseService {

  constructor(app) {
    super(app);
    this.total_money = app.$dbs.primary.total_money;
  }

  async create(req, res) {
    let data = await this.total_money.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.total_money.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.total_money.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.total_money.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.total_money.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.total_money.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.total_money.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.total_money.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.total_money.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.total_money.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.total_money.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.total_money.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.total_money.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.total_money.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.total_money.delb(req.body);
    return data;
  }

}

module.exports = TotalMoneyService;