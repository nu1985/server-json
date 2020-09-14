const {
  BaseService
} = require('xc-core');

class MonBank4Service extends BaseService {

  constructor(app) {
    super(app);
    this.monBank4 = app.$dbs.primary.monBank4;
  }

  async create(req, res) {
    let data = await this.monBank4.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.monBank4.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.monBank4.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.monBank4.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.monBank4.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.monBank4.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.monBank4.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.monBank4.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.monBank4.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.monBank4.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.monBank4.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.monBank4.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.monBank4.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.monBank4.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.monBank4.delb(req.body);
    return data;
  }

}

module.exports = MonBank4Service;