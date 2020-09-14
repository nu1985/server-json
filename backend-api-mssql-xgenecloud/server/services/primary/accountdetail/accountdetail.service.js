const {
  BaseService
} = require('xc-core');

class AccountdetailService extends BaseService {

  constructor(app) {
    super(app);
    this.accountdetail = app.$dbs.primary.accountdetail;
  }

  async create(req, res) {
    let data = await this.accountdetail.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.accountdetail.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.accountdetail.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.accountdetail.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.accountdetail.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.accountdetail.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.accountdetail.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.accountdetail.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.accountdetail.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.accountdetail.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.accountdetail.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.accountdetail.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.accountdetail.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.accountdetail.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.accountdetail.delb(req.body);
    return data;
  }

}

module.exports = AccountdetailService;