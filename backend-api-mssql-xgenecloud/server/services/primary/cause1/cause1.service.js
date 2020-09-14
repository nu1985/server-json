const {
  BaseService
} = require('xc-core');

class Cause1Service extends BaseService {

  constructor(app) {
    super(app);
    this.cause1 = app.$dbs.primary.cause1;
  }

  async create(req, res) {
    let data = await this.cause1.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.cause1.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.cause1.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.cause1.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.cause1.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.cause1.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.cause1.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.cause1.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.cause1.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.cause1.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.cause1.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.cause1.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.cause1.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.cause1.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.cause1.delb(req.body);
    return data;
  }

}

module.exports = Cause1Service;