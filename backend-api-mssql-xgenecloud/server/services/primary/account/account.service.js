const {
  BaseService
} = require('xc-core');

class AccountService extends BaseService {

  constructor(app) {
    super(app);
    this.account = app.$dbs.primary.account;
  }

  async create(req, res) {
    let data = await this.account.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.account.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.account.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.account.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.account.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.account.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.account.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.account.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.account.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.account.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.account.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.account.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.account.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.account.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.account.delb(req.body);
    return data;
  }

}

module.exports = AccountService;