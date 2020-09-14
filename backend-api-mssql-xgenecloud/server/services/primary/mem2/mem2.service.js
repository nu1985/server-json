const {
  BaseService
} = require('xc-core');

class Mem2Service extends BaseService {

  constructor(app) {
    super(app);
    this.mem2 = app.$dbs.primary.mem2;
  }

  async create(req, res) {
    let data = await this.mem2.insert(req.body);
    return data;
  }

  async list(req, res) {
    let data = await this.mem2.list(req.query);
    return data;
  }

  async read(req, res) {
    let data = await this.mem2.readByPk(req.params.id);
    return data;
  }

  async update(req, res) {
    let data = await this.mem2.updateByPk(req.params.id, req.body);
    return data;
  }

  async delete(req, res) {
    let data = await this.mem2.delByPk(req.params.id);
    return data;
  }

  async findOne(req, res) {
    let data = await this.mem2.findOne(req.query);
    return data;
  }

  async count(req, res) {
    let data = await this.mem2.countByPk(req.query);
    return data;
  }

  async exists(req, res) {
    let data = await this.mem2.exists(req.params.id);
    return data;
  }

  async groupBy(req, res) {
    let data = await this.mem2.groupBy({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async aggregate(req, res) {
    let data = await this.mem2.aggregate({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distribution(req, res) {
    let data = await this.mem2.distribution({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async distinct(req, res) {
    let data = await this.mem2.distinct({
      ...req.params,
      ...req.query
    });
    return data;
  }

  async createb(req, res) {
    let data = await this.mem2.insertb(req.body);
    return data;
  }

  async updateb(req, res) {
    let data = await this.mem2.updateb(req.body);
    return data;
  }

  async deleteb(req, res) {
    let data = await this.mem2.delb(req.body);
    return data;
  }

}

module.exports = Mem2Service;