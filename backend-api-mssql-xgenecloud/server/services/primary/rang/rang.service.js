const {
  BaseService
} = require('xc-core');

class RangService extends BaseService {

  constructor(app) {
    super(app);
    this.rang = app.$dbs.primary.rang;
  }

  async create(req, res) {
    let data = await this.rang.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.rang.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.rang.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.rang.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.rang.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.rang.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.rang.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.rang.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.rang.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.rang.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.rang.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.rang.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.rang.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.rang.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.rang.delb(req.body);
    return data;
  }

}

module.exports = RangService;