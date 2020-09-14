const {
  BaseService
} = require('xc-core');

class AccountNeeService extends BaseService {

  constructor(app) {
    super(app);
    this.accountNee = app.$dbs.primary.accountNee;
  }

  async create(req, res) {
    let data = await this.accountNee.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.accountNee.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.accountNee.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.accountNee.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.accountNee.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.accountNee.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.accountNee.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.accountNee.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.accountNee.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.accountNee.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.accountNee.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.accountNee.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.accountNee.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.accountNee.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.accountNee.delb(req.body);
    return data;
  }

}

module.exports = AccountNeeService;