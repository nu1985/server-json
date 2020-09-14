const {
  BaseService
} = require('xc-core');

class AccountrecService extends BaseService {

  constructor(app) {
    super(app);
    this.accountrec = app.$dbs.primary.accountrec;
  }

  async create(req, res) {
    let data = await this.accountrec.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.accountrec.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.accountrec.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.accountrec.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.accountrec.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.accountrec.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.accountrec.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.accountrec.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.accountrec.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.accountrec.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.accountrec.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.accountrec.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.accountrec.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.accountrec.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.accountrec.delb(req.body);
    return data;
  }

}

module.exports = AccountrecService;